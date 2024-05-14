import Image from "next/image";
import { Volkhov } from "next/font/google";
import CategoryList from "./CategoryList";

const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

const CategorySection = () => {
  return (
    <section className="text-center mt-[123px] relative">
      <Image
        src={"/images/category-section/decore.svg"}
        alt="decore"
        width={200}
        height={200}
        className="hidden lg:block absolute right-[-50px] top-0 z-[-1] w-[153px]"
      />
      <h4 className="uppercase text-[#5E6282] text-[14px] md:text-[18px] font-semibold">
        Category
      </h4>
      <h3
        className={`${volkhov.className} text-primary text-[30px] md:text-[50px] relative font-bold`}
      >
        We Offer Best Services
      </h3>
      <div className="mt-[66px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-[20px] md:gap-[50px] md:justify-between flex-wrap">
        <CategoryList />
      </div>
    </section>
  );
};

export default CategorySection;
