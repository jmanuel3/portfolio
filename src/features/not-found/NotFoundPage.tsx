import mascotFumble from '../../assets/mascots/mascot-fumble.webp';
import { Backdrop } from '../../components/ui/Backdrop';
import { buttonPrimary } from '../../components/ui/button';
import { MascotPatch } from '../../components/ui/MascotPatch';

export function NotFoundPage() {
  return (
    <>
      <Backdrop />
      <main className="mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center px-4 py-16 text-center motion-safe:animate-fade-up sm:px-6">
        {/* Above the fold here, so no lazy loading */}
        <MascotPatch src={mascotFumble} loading="eager" />

        <p
          aria-hidden="true"
          className="mt-8 font-display text-6xl text-brand sm:text-7xl"
        >
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-normal tracking-tight text-ink-strong sm:text-4xl">
          Fumble! Page not found.
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">
          The page you're looking for doesn't exist or has moved.
        </p>

        <a href="/" className={`${buttonPrimary} mt-8`}>
          Back to home
        </a>
      </main>
    </>
  );
}
