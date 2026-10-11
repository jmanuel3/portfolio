interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}
