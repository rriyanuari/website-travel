import Image from "next/image";
import { Volkhov } from "next/font/google";

const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

const BookSection = () => {
  return (
    <section className="mt-[123px] grid lg:grid-cols-2 items-center gap-[40px]">
      <div>
        <h4 className="text-[#5E6282] text-[14px] md:text-[18px] font-semibold">
          Easy and Fast
        </h4>
        <h3
          className={`${volkhov.className} text-primary text-[30px] md:text-[50px] relative font-bold capitalize`}
        >
          Book your next trip in 3 easy steps
        </h3>
        <div className="mt-[31px] flex flex-col gap-[48px]">
          <div className="flex items-center gap-[21px]">
            <Image
              src={"/images/book-section/book1.svg"}
              alt="book-section"
              width={48}
              height={48}
              className="w-auto"
            />
            <div>
              <p className="font-bold">Choose Destination</p>
              <p className="text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[21px]">
            <Image
              src={"/images/book-section/book2.svg"}
              alt="book-section"
              width={48}
              height={48}
              className="w-auto"
            />
            <div>
              <p className="font-bold">Make Payment</p>
              <p className="text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[21px]">
            <Image
              src={"/images/book-section/book3.svg"}
              alt="book-section"
              width={48}
              height={48}
              className="w-auto"
            />
            <div>
              <p className="font-bold">Reach Airport on Selected Date</p>
              <p className="text-[#5E6282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/images/book-section/image.svg"}
        alt="book-section"
        width={200}
        height={200}
        className="hidden lg:block lg:w-auto lg:ml-auto my-[40px] lg:my-0"
      />
    </section>
  );
};

export default BookSection;
