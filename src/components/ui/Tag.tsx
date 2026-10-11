interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      {children}
    </span>
  );
}
