import Image from "next/image";
import Container from "../ui/Container";
import SectionDivider from "../ui/SectionDivider";

const photos = [
  "/assets/desktop/image-woman-in-videocall.jpg",
  "/assets/desktop/image-women-videochatting.jpg",
  "/assets/desktop/image-men-in-meeting.jpg",
  "/assets/desktop/image-man-texting.jpg",
];

export default function Features() {
  return (
    <section id="what" className="mt-16 md:mt-20 lg:mt-24">
      <SectionDivider number="01" />

      <Container>
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {photos.map((src) => (
            <div key={src} className="overflow-hidden rounded-xl">
              <Image
                src={src}
                alt=""
                width={255}
                height={242}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm font-black tracking-[0.25em] text-cyan-600">
            BUILT FOR MODERN USE
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
            Smarter meetings, all <br className="hidden md:block" /> in one place
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-400 md:text-lg">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </Container>
    </section>
  );
}
