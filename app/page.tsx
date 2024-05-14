import Image from "next/image";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/Hero/Hero";
import CategorySection from "@/components/sections/Category/Category";
import DestinationSection from "@/components/sections/Destination/Destination";
import BookSection from "@/components/sections/Book/Book";
import Footer from "@/components/Footer";
import SubscribeSection from "@/components/sections/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <div className="container relative">
        <Image
          src={"/images/hero-section/bg-yellow.svg"}
          alt="decore"
          width={200}
          height={200}
          className="hidden lg:block absolute top-[-50px] z-[-1] w-full"
        />
        <main>
          <Navbar />

          <HeroSection />
          <CategorySection />
          <DestinationSection />
          <BookSection />
          <SubscribeSection />

          <Footer />
        </main>
      </div>
    </>
  );
}
