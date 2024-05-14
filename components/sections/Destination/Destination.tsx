import Image from "next/image";
import { Volkhov } from "next/font/google";

import DestinationList from "./DestinationList";

const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

const DestinationSection = () => {
  return (
    <section className="text-center mt-[123px] relative">
      <Image
        src={"/images/destination-section/decore.svg"}
        alt="decore"
        width={200}
        height={200}
        className="hidden lg:block absolute right-[-80px] top-[30%] z-[-1] w-[153px]"
      />
      <h4 className="text-[#5E6282] text-[14px] md:text-[18px] font-semibold">
        Top Selling
      </h4>
      <h3
        className={`${volkhov.className} text-primary text-[30px] md:text-[50px] relative font-bold`}
      >
        Top Destinations
      </h3>
      <div className="mt-[66px] flex flex-col lg:flex-row items-center justify-between gap-[55px]">
        <DestinationList />
      </div>
    </section>
  );
};

export default DestinationSection;
