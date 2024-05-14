import Image from "next/image";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    img: "category-radar",
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    img: "category-plane",
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    img: "category-mic",
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    img: "category-cors",
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

const CategoryList = () => {
  return categories.map((item) => (
    <CategoryCard key={item.title} category={item} />
  ));
};

export default CategoryList;
