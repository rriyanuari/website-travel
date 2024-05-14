import Image from "next/image";
import Link from "next/link";

const navigation = ["destinations", "hotels", "flights", "bookings"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between text-primary font-semibold">
      <Image
        src="/logo.svg"
        width={200}
        height={200}
        alt="logo"
        className="w-[120px]"
      />
      <div className="hidden xl:flex items-center gap-[86px]">
        <div className="flex items-center gap-[60px]">
          {navigation.map((item) => (
            <Link
              key={item}
              href={`#`}
              className="capitalize hover:-translate-y-1 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-[60px]">
          <Link href={"#"} className="hover:-translate-y-1 transition-all">
            Login
          </Link>
          <Link
            href={"#"}
            className="border border-black rounded-[5px] px-[21px] py-[9px] hover:-translate-y-1 transition-all"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
