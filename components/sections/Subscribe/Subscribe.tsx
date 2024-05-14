import Image from "next/image";
import { Volkhov } from "next/font/google";

const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

const SubscribeSection = () => {
  return (
    <section className="mt-[123px]">
      <div className="bg-[#DFD7F9] w-full rounded-[20px] rounded-tl-[129px] flex flex-col items-center px-4 lg:px-[155px] py-16 lg:py-[79px] relative">
        <Image
          src={"/images/subscribe-section/message-icon.svg"}
          alt="mesage-icon"
          width={70}
          height={70}
          className="absolute right-[-1rem] top-[-1rem] md:right-[-1.5rem] md:top-[-1.5rem] w-[50px] h-[50px] md:w-auto "
        />
        <h3 className="text-[22px] md:text-[33px] md:leading-[54px] text-[#5E6282] font-semibold text-center">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="mt-8 lg:mt-[96px] flex flex-col md:flex-row gap-[18px]">
          <div className="bg-white w-full md:w-[421px] rounded-[10px] px-[30px] py-[25px] flex gap-[14px]">
            <Image
              src={"/images/subscribe-section/mail-icon.svg"}
              alt="book-section"
              width={21}
              height={18}
            />
            <input
              type="text"
              placeholder="Your email"
              className="w-full focus:outline-none"
            />
          </div>
          <button className="bg-[#FF7D68] w-full md:w-[180px] h-[68px] rounded-[10px] text-white text-[17px] font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
