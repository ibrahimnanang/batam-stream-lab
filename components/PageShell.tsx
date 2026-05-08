import type { ReactNode } from "react";

export function PageShell({
  children,
  compact,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${compact ? "py-12 sm:py-16" : "py-16 sm:py-24"}`}
    >
      {children}
    </div>
  );
}
