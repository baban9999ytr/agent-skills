import type { PropsWithChildren, ReactNode } from "react";

export function ActionCard({
  action,
  children,
  title,
}: PropsWithChildren<{ action: ReactNode; title: string }>) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{children}</p>
      <button type="button">{action}</button>
    </article>
  );
}
