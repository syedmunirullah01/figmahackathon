"use client";
import SinglePagePromotion from "../../components/SinglePagePromotion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsCartDash } from "react-icons/bs";
import Image from "next/image";

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: "1",
      img: "/fprod1.png",
      name: "Library Stool Chair",
      discPrice: "$20",
      off: "New",
      offColor: "#01AD5A",
    },
    {
      id: "2",
      img: "/fprod2.png",
      name: "Library Stool Chair",
      discPrice: "$20",
      RealPrice: "$39",
      off: "Sales",
      offColor: "#F5813F",
    },
    {
      id: "3",
      img: "/fprod3.png",
      name: "Library Stool Chair",
      discPrice: "$20",
    },
    {
      id: "4",
      img: "/fprod4.png",
      name: "Library Stool Chair",
      discPrice: "$20",
    },
    {
      id: "5",
      img: "/cat2.png",
      name: "Library Stool Chair",
      discPrice: "$20",
      off: "New",
      offColor: "#01AD5A",
    },
    {
      id: "6",
      img: "/card2.png",
      name: "Library Stool Chair",
      discPrice: "$20",
      RealPrice: "$39",
      off: "Sales",
      offColor: "#F5813F",
    },
    {
      id: "7",
      img: "/fprod5.png",
      name: "Library Stool Chair",
      discPrice: "$20",
    },
    {
      id: "8",
      img: "/card3.png",
      name: "Library Stool Chair",
      discPrice: "$20",
    },
    {
      id: "9",
      img: "/cat1.png",
      name: "Library Stool Chair",
      discPrice: "$20",
      off: "New",
      offColor: "#01AD5A",
    },
    {
      id: "10",
      img: "/fprod2.png",
      name: "Library Stool Chair",
      discPrice: "$20",
      RealPrice: "$39",
      off: "Sales",
      offColor: "#F5813F",
    },
    {
      id: "11",
      img: "/fprod3.png",
      name: "Library Stool Chair",
      discPrice: "$20",
    },
    {
      id: "12",
      img: "/cat3.png",
      name: "Library Stool Chair",
      discPrice: "$20",
    },
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
      img: "/cat3.png",
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
      img: "/cat1.png",
      name: "Library Stool Chair",
      discPrice: "$99",
    },
  ];

  
  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <main>
      <div>
        <div className="flex md:flex-row flex-col mt-5 gap-10 lg:p-10 p-3 sm:mx-10 mx-3 lg:mx-20">
          <div className="md:w-1/2 mx-auto relative w-[260px] h-[260px] sm:w-full sm:h-full">
            <Image
              src={product.img}
              alt={product.name}
              layout="responsive"
              width={500}
              height={500}
              className="rounded-xl object-cover hover:drop-shadow-xl"
              priority
            />
          </div>
          <div className="md:w-1/2 flex flex-col mx-5 lg:mx-14">
            <div className="lg:pb-10 pb-5 border-b border-[#D9D9D9]">
              <h2 className="lg:text-6xl text-2xl md:text-4xl text-[#272343] font-bold mb-4 md:mb-7">
                {product.name}
              </h2>
              <span className="w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-[#029FAE]">
                {product.discPrice}.00 USD
              </span>
            </div>
            <div className="mt-6">
              <p className="text-[#272343]/60 tracking-wide text-sm md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis, minus hic? Odit, debitis! Quisquam, enim aboriosam nam
                exercitationem mollitia.
              </p>
              <button className="w-fit rounded-lg md:mt-5 mt-2 md:px-4 px-2 items-center md:gap-3 gap-1 py-2 md:py-3 text-white bg-[#029FAE] flex">
                <BsCartDash className="size-5" />{" "}
                <Link href="/cart">Add To Cart</Link>
              </button>
            </div>
          </div>
        </div>
        <SinglePagePromotion />
      </div>
    </main>
  );
};

export default ProductDetail;
