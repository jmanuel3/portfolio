import mascotHello from '../../assets/mascots/mascot-hello.webp';
import mascotReady from '../../assets/mascots/mascot-ready.webp';
import runAv1 from '../../assets/mascots/mascot-run-av1.mp4';
import runHevc from '../../assets/mascots/mascot-run-hevc.mp4';
import type { useMascotRun } from './useMascotRun';

type MascotStageProps = ReturnType<typeof useMascotRun>;

// Poster, video and final pose share one size and one box, so every swap is seamless
const SIZE = 'mascot-outline h-64 w-auto aspect-[508/560] sm:h-80';

export function MascotStage({
  enabled,
  state,
  replay,
  videoRef,
  stageRef,
}: MascotStageProps) {
  // Decorative: the heading already names who this page is about
  const poster = (
    <img
      src={mascotReady}
      alt=""
      width={508}
      height={560}
      fetchPriority="high"
      className={`mascot-poster ${SIZE}`}
    />
  );

  // Reduced motion or no WebGL: the static pose only, and the video is never downloaded
  if (!enabled) return poster;

  return (
    <button
      ref={stageRef}
      type="button"
      onClick={replay}
      disabled={state === 'running'}
      aria-label="Replay the mascot run"
      data-run={state}
      className="mascot-stage shrink-0"
    >
      {poster}
      {/* Color on top, alpha below: the component recombines them in WebGL */}
      <stacked-alpha-video className={`mascot-video ${SIZE}`}>
        <video ref={videoRef} muted playsInline preload="none">
          <source
            src={runAv1}
            type="video/mp4; codecs=av01.0.08M.08.0.110.01.01.01.1"
          />
          <source src={runHevc} type="video/mp4; codecs=hvc1.1.6.H120.b0" />
        </video>
      </stacked-alpha-video>
      {/* Last frame of the video as a plain image: it loads during the run and
          rests on screen without keeping a WebGL canvas alive */}
      {state !== 'idle' && (
        <img
          src={mascotHello}
          alt=""
          width={508}
          height={560}
          decoding="async"
          className={`mascot-final ${SIZE}`}
        />
      )}
    </button>
  );
}
