import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "13",
    img: "/fprod5.png",
    name: "Library Stool Chair",
    discPrice: "$99",
  },
  {
    id: "14",
    img: "/fprod1.png",
    name: "Library Stool Chair",
    discPrice: "$99",
  },
  {
    id: "15",
    img: "/fprod2.png",
    name: "Library Stool Chair",
    discPrice: "$99",
  },
  {
    id: "16",
    img: "/fprod3.png",
    name: "Library Stool Chair",
    discPrice: "$99",
  },
  {
    id: "17",
    img: "/fprod4.png",
    name: "Library Stool Chair",
    discPrice: "$99",
  },
];

const SinglePagePromotion = () => {
  return (
    <div className="lg:mx-20 sm:mx-10 mx-3 lg:mt-10 mt-5 mb-10 lg:mb-24">
      <div className="head flex md:flex-row flex-col gap-3 justify-between items-center">
        <h3 className="uppercase lg:text-[28px] text-[18px] font-bold text-black">
          Featured Products
        </h3>
        <Link
          href="/products"
          className="text-black font-bold lg:text-[18px] text-sm lg:border-b-2 border-b lg:pb-1 border-black"
        >
          View All
        </Link>
      </div>
      <div className="images mt-12 gap-7 overflow-x-scroll scrollbar-hide flex">
        {products.map((prod) => (
          <Link href={`/products/${prod.id}`} key={prod.id}>
            <div className="w-[220px] h-[220px] hover:drop-shadow-md relative">
              <Image
                src={prod.img}
                alt={prod.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
            <div className="flex justify-between mt-3">
              <span className="text-[#272343]">{prod.name}</span>
              <span className="text-black font-bold">{prod.discPrice}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SinglePagePromotion;
