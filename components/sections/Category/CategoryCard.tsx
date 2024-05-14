import Image from "next/image";

interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
}

const CategoryCard = (props: { category: CategoryCardProps }) => {
  const { category } = props;
  return (
    <div key={category.title} className={`w-full relative mb-[50px] md:mb-0`}>
      <div
        className={`flex  flex-col items-center z-10 rounded-[36px] bg-white  ${
          category.img == "category-plane" && "p-[42px] drop-shadow-2xl "
        }`}
      >
        <Image
          src={`/images/category-section/${category.img}.svg`}
          alt={category.title}
          width={200}
          height={200}
          className={`w-[95px] ${
            category.img == "category-plane" && "w-[160px]"
          }`}
        />
        <p className="text-primary text-[20px] font-semibold mt-[25px] mb-[15px]">
          {category.title}
        </p>
        <p className="w-[181px]">{category.desc}</p>
      </div>
      {category.img == "category-plane" && (
        <div className="w-[100px] h-[100px] bg-red rounded-tl-[30px] rounded-br-[10px] absolute bottom-[-2rem] left-[-2.3rem] z-[-1]" />
      )}
    </div>
  );
};

export default CategoryCard;
