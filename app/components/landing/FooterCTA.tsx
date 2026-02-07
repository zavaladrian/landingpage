import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionDivider from "../ui/SectionDivider";

export default function FooterCTA() {
  return (
    <section className="mt-20">
      <SectionDivider number="02" />

      <div className="relative mt-16 overflow-hidden">
        {/* Background image (swap paths based on your starter assets) */}
        <div className="absolute inset-0 bg-[url('/assets/mobile/image-footer.jpg')] bg-cover bg-center md:bg-[url('/assets/tablet/image-footer.jpg')] lg:bg-[url('/assets/desktop/image-footer.jpg')]" />

        {/* Teal overlay */}
        <div className="absolute inset-0 bg-cyan-600/85" />

        <Container>
          <div className="relative py-20 text-center text-white md:py-24 lg:flex lg:items-center lg:justify-between lg:text-left">
            <h3 className="text-3xl font-black leading-tight md:text-4xl">
              Experience more together
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/90 lg:mx-0 lg:mt-0 lg:max-w-md">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>

            <div className="mt-8 lg:mt-0">
              <Button variant="purple" href="#">
                Download <span className="ml-2 text-purple-300">v1.3</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
