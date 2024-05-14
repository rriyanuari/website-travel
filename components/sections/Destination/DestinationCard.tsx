import Image from "next/image";

interface DestinationCardProps {
  img: string;
  title: string;
  desc: string;
}

const DestinationCard = (props: { destination: DestinationCardProps }) => {
  const { destination } = props;
  return (
    <div className="w-full md:w-[314px] bg-white drop-shadow-md rounded-[24px] ">
      <div className="h-[327px] rounded-t-[24px] overflow-hidden">
        <Image
          src={`/images/destination-section/${destination.img}.svg`}
          alt={destination.title}
          width={200}
          height={200}
          className="w-full object-cover"
        />
      </div>
      <div className="w-full px-[25px] py-[30px] text-left">
        <div className="flex justify-between">
          <p>{destination.title}</p>
          <p>{destination.desc}</p>
        </div>
        <p className="my-[20px] flex items-center gap-[15px]">
          <Image
            src={`/images/destination-section/icon-plane.svg`}
            alt="icon-plane"
            width={20}
            height={20}
          />
          10 Days Trip
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
