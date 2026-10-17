import type { DetailedHTMLProps, HTMLAttributes } from 'react';

// <stacked-alpha-video> is a custom element registered by the package on import
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'stacked-alpha-video': DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
