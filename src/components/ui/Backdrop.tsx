// Purely decorative backdrop, so it's hidden from assistive technology
export function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="backdrop-glow backdrop-glow--red" />
      <div className="backdrop-glow backdrop-glow--gold" />
      <div className="grain" />
    </div>
  );
}
