import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import FooterCTA from "./components/landing/FooterCTA";



export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <FooterCTA />
    </main>
  );
}




// import Image from "next/image";
// import Header from "./components/landing/Header";
// import Footer from "./components/landing/Footer";



// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//        <Header/>

//   <span>01</span>
//  <p> Built for modern use

//   Smarter meetings, all in one place

//   Send messages, share files, show your screen, and record your meetings — all in one 
//   workspace. Control who can join with invite-only team access, data encryption, and data export.
// </p>
//   <Footer/>
//     </div>
//   );
// }
