import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center py-8">
      <Image
        src="\assets\logo.svg"
        alt="Meet"
        width={120}
        height={28}
        priority
      />
    </header>
  );
}
