import DestinationCard from "./DestinationCard";

const destination = [
  {
    img: "destination1",
    title: "Rome, Italty",
    desc: "$5,42k",
  },
  {
    img: "destination2",
    title: "London, UK",
    desc: "$4.2k",
  },
  {
    img: "destination3",
    title: "Full Europe",
    desc: "$15k",
  },
];

const DestinationList = () => {
  return destination.map((item) => (
    <DestinationCard key={item.title} destination={item} />
  ));
};

export default DestinationList;
