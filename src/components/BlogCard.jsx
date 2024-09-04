/* eslint-disable react/prop-types */
import flowerImage from "./../assets/images/flower.jpg";
const BlogCard = ({ title, description }) => {
  return (
    <div className="h-[450px] bg-white rounded-md shadow-lg mb-4 hover:scale-105 transition-all ease-in">
      <div className="w-full h-[250px]">
        <img src={flowerImage} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-3">
        <h1 className="text-2xl p-3 text-[#108d87] font-bold">
          {title.length >= 25 ? `${title.slice(0, 25)}...` : title}
        </h1>
        <p className="text-lg p-3 text-neutral-500 font-medium">
          {description.length >= 35
            ? `${description.slice(0, 35)}...`
            : description}
        </p>
        <p className="text-lg p-2 text-neutral-500 font-medium">
          By: Bolarinwa Ahmed
        </p>
      </div>
      <div className=""></div>
    </div>
  );
};

export default BlogCard;
