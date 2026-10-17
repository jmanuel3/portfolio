import { useCallback, useEffect, useRef, useState } from 'react';

type RunState = 'idle' | 'running' | 'done';

// Software rasterisers (no GPU) composite every video frame on the main thread
const SOFTWARE_RENDERER = /swiftshader|llvmpipe|softpipe|software/i;

// The play composites the stacked-alpha video in WebGL, so it needs a GPU
function hasHardwareWebGL() {
  const gl = document.createElement('canvas').getContext('webgl');
  if (!gl) return false;

  // Chrome masks RENDERER; the debug extension exposes the real one there
  let renderer = String(gl.getParameter(gl.RENDERER));
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  if (renderer === 'WebKit WebGL' && debugInfo) {
    renderer = String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
  }

  // Browsers cap live WebGL contexts per page: free the probe straight away
  gl.getExtension('WEBGL_lose_context')?.loseContext();
  return !SOFTWARE_RENDERER.test(renderer);
}

// Reduced motion or no GPU: the static pose is shown instead
function canAnimate() {
  const motionOk = window.matchMedia(
    '(prefers-reduced-motion: no-preference)',
  ).matches;
  return motionOk && hasHardwareWebGL();
}

/*
 * Plays the mascot run once, the first time the video is loaded, the tab is
 * visible and the stage is on screen; replay() runs it again on demand.
 * `state` drives the CSS: the field slides while running and stays advanced when done.
 */
export function useMascotRun() {
  const [enabled] = useState(canAnimate);
  const [state, setState] = useState<RunState>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLButtonElement>(null);

  const replay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    // Autoplay can be refused (e.g. iOS Low Power Mode): keep the static pose
    video.play().catch(() => setState('idle'));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const stage = stageRef.current;
    if (!enabled || !video || !stage) return;

    let inView = false;
    let rendererReady = false;
    let started = false;
    const tryAutoplay = () => {
      const ready = video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA;
      const visible = document.visibilityState === 'visible';
      if (started || !rendererReady || !ready || !inView || !visible) return;
      started = true;
      replay();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        tryAutoplay();
      },
      { threshold: 0.6 },
    );
    const onPlaying = () => setState('running');
    const onEnded = () => setState('done');

    // The run is not needed for the first paint: fetch the video and the
    // component that renders it once the page has loaded, so neither competes
    // with the poster, fonts or CSS. <stacked-alpha-video> upgrades on define.
    const fetchVideo = () => {
      // If the component fails to load, the run never starts: the static pose stays
      import('stacked-alpha-video')
        .then(() => {
          rendererReady = true;
          tryAutoplay();
        })
        .catch((error: unknown) => console.warn('Mascot run disabled', error));
      video.preload = 'auto';
      video.load();
    };
    if (document.readyState === 'complete') fetchVideo();
    else window.addEventListener('load', fetchVideo, { once: true });

    observer.observe(stage);
    video.addEventListener('canplaythrough', tryAutoplay);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('ended', onEnded);
    document.addEventListener('visibilitychange', tryAutoplay);
    return () => {
      observer.disconnect();
      video.removeEventListener('canplaythrough', tryAutoplay);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('ended', onEnded);
      document.removeEventListener('visibilitychange', tryAutoplay);
      window.removeEventListener('load', fetchVideo);
    };
  }, [enabled, replay]);

  return { enabled, state, replay, videoRef, stageRef };
}
