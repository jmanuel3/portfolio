interface MascotPatchProps {
  src: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function MascotPatch({
  src,
  className = '',
  loading = 'lazy',
}: MascotPatchProps) {
  return (
    <div
      className={`stitched grid size-40 place-items-center rounded-full bg-paper p-5 motion-safe:transition-transform motion-safe:hover:rotate-6 sm:size-48 ${className}`}
    >
      <img
        src={src}
        alt=""
        loading={loading}
        decoding="async"
        className="size-full object-contain"
      />
    </div>
  );
}
