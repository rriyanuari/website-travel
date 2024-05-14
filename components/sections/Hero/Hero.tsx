import Image from "next/image";
import { Volkhov } from "next/font/google";

const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

const HeroSection = () => {
  return (
    <section className="my-[50px] xl:my-[155px] flex items-center justify-between relative">
      <div className="w-full xl:w-[630px] relative">
        <h2 className="text-red text-[20px] uppercase font-bold mb-[24px]">
          Best Destinations around the world
        </h2>
        <h1
          className={`${volkhov.className} text-primary text-[50px] font-bold md:text-[84px] leading-[60px] md:leading-[89px] relative`}
        >
          <Image
            src={"/images/hero-section/underline-red.svg"}
            alt="decore"
            width={200}
            height={200}
            className="absolute right-[10px] top-[45px] md:top-[70px] z-[-1] w-auto"
          />
          Travel, enjoy and live a new and full life
        </h1>
        <p className="w-full xl:w-[500px] my-[30px] leading-[30px] text-[#5E6282]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[44px]">
          <button className="w-full md:w-auto bg-yellow text-white p-[20px] rounded-[5px]">
            Find out more
          </button>
          <button className="flex items-center gap-[21px] text-[#686D77]">
            <div className="rounded-full bg-red text-white p-[20px] w-[52px] h-[52px] flex items-center justify-center shadow-md shadow-red">
              <Image
                src={"/images/hero-section/icon-play.svg"}
                alt="decore"
                width={15}
                height={15}
              />
            </div>
            Play Demo
          </button>
        </div>
      </div>
      <Image
        src={"/images/hero-section/travel-woman.svg"}
        alt="decore"
        width={200}
        height={200}
        className="hidden xl:block absolute w-[760px] right-[-80px]"
      />
    </section>
  );
};

export default HeroSection;
