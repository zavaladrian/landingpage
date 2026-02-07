import Link from "next/link";

type Props = {
  href?: string;
  variant?: "cyan" | "purple";
  children: React.ReactNode;
};

const styles = {
  cyan:
    "bg-cyan-600 text-white hover:bg-cyan-600/90 focus-visible:ring-cyan-600",
  purple:
    "bg-purple-600 text-white hover:bg-purple-600/90 focus-visible:ring-purple-600",
};

export default function Button({ href = "#", variant = "cyan", children }: Props) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-black",
        "transition hover:-translate-y-0.5 hover:shadow-lg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite",
        styles[variant],
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
