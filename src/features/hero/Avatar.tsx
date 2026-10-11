import type { PointerEvent } from 'react';
import avatarAvif from '../../assets/avatar.avif';
import avatarWebp from '../../assets/avatar.webp';
import { site } from '../../content/site';

const MAX_TILT_DEG = 10;

// Writes CSS variables directly, so pointer moves never trigger React re-renders
function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
  const frame = event.currentTarget;
  const rect = frame.getBoundingClientRect();
  // Pointer position relative to the center, from -0.5 to 0.5 on each axis
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  frame.style.setProperty('--tilt-x', `${(-y * MAX_TILT_DEG).toFixed(2)}deg`);
  frame.style.setProperty('--tilt-y', `${(x * MAX_TILT_DEG).toFixed(2)}deg`);
}

function resetTilt(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg');
  event.currentTarget.style.setProperty('--tilt-y', '0deg');
}

export function Avatar() {
  return (
    <div
      className="avatar-float shrink-0"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <picture className="avatar-tilt block">
        <source srcSet={avatarAvif} type="image/avif" />
        <img
          src={avatarWebp}
          alt={`Illustrated portrait of ${site.name}`}
          width={640}
          height={640}
          fetchPriority="high"
          className="size-56 rounded-full shadow-[0_0_80px_-16px_var(--color-accent)] ring-1 ring-accent/30 sm:size-72"
        />
      </picture>
    </div>
  );
}
