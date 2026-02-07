import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-14 lg:pt-16">
      {/* Desktop side art */}
      <div className="pointer-events-none absolute inset-x-0 top-24 hidden lg:block">
        <Image
          src="/assets/desktop/image-hero-left.png"
          alt=""
          width={394}
          height={303}
          className="absolute -left-8 top-0"
          priority
        />
        <Image
          src="/assets/desktop/image-hero-right.png"
          alt=""
          width={394}
          height={303}
          className="absolute -right-8 top-0"
          priority
        />
      </div>

      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/assets/logo.svg"
          alt="Meet"
          width={120}
          height={28}
          priority
        />
      </div>

      <Container>
        {/* Mobile / tablet hero art */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Image
            src="/assets/tablet/image-hero.png"
            alt=""
            width={820}
            height={303}
            className="w-full max-w-205"
            priority
          />
        </div>

        {/* Center content */}
        <div className="mx-auto mt-10 max-w-xl text-center lg:mt-24">
          <h1 className="text-[2.5rem] font-black leading-[1.05] text-slate-900 md:text-5xl">
            Group Chat for Everyone
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-400 md:text-lg">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="cyan" href="#">
              Download <span className="ml-2 text-cyan-300">v1.3</span>
            </Button>
            <Button variant="purple" href="#what">
              What is it?
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
