interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-full border border-dashed border-paper-muted/50 px-2.5 py-0.5 text-xs font-medium text-paper-muted">
      {children}
    </span>
  );
}
