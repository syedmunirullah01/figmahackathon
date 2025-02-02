"use client";

import { useCart } from "../../../context/CartContext"; // Adjust the import path
import SinglePagePromotion from "../../components/SinglePagePromotion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsCartDash } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa";

// Function to convert rating to stars
const renderStars = (rating: number) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => {
        if (rating >= i + 1) {
          return <FaStar key={i} className="text-yellow-400" />;
        } else if (rating >= i + 0.5) {
          return <FaStarHalfAlt key={i} className="text-yellow-400" />;
        } else {
          return <FaRegStar key={i} className="text-yellow-400" />;
        }
      })}
    </div>
  );
};

// Function to copy URL to clipboard
const copyToClipboard = (url: string) => {
  navigator.clipboard.writeText(url).then(
    () => alert("Link copied to clipboard!"),
    (err) => alert("Failed to copy link: " + err)
  );
};

type Product = {
  _id: string;
  title: string;
  originalPrice: number;
  discountedPrice?: number;
  discountPercentage?: number;
  ratings?: number;
  isNew?: boolean;
  isSale?: boolean;
  imageUrl: string;
  description?: string;
  inventory?: number;
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [showPopup, setShowPopup] = useState<boolean>(false); // Popup state
  const { addToCart } = useCart(); // Use the cart context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "products" && _id == $id][0] {
          _id,
          title,
          "originalPrice": priceWithoutDiscount,
          discountedPrice,
          "discountPercentage": round(((priceWithoutDiscount - discountedPrice) / priceWithoutDiscount) * 100),
          ratings,
          isNew,
          isSale,
          "imageUrl": image.asset->url,
          description,
          inventory
        }`;

        const data = await client.fetch(query, { id });

        if (!data) {
          throw new Error("Product not found");
        }

        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError((err as Error).message || "Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product._id,
        title: product.title,
        price: product.discountedPrice || product.originalPrice,
        quantity,
        imageUrl: product.imageUrl,
      });
      setShowPopup(true); // Show the popup
      setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error)
    return <p className="text-center py-10 text-red-500">Error: {error}</p>;
  if (!product) return <p className="text-center py-10">Product not found!</p>;

  return (
    <main>
      <div className="flex flex-col lg:flex-row mt-5 gap-10 lg:p-10 p-3 sm:mx-10 mx-3 lg:mx-20">
        {/* Product Image */}
        <div className="lg:w-1/2 mx-auto relative w-[260px] h-[260px] sm:w-full sm:h-full">
          <Image
            src={product.imageUrl}
            alt={product.title}
            layout="responsive"
            width={500}
            height={500}
            className="rounded-xl object-cover hover:drop-shadow-xl"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 flex flex-col mx-5 lg:mx-14">
          <div className="lg:pb-10 pb-5 border-b border-[#D9D9D9]">
            <h2 className="lg:text-6xl text-2xl md:text-4xl text-[#272343] font-bold mb-4 md:mb-7">
              {product.title}
            </h2>

            {/* Price & Discount */}
            <div className="flex flex-col gap-2">
              {product.discountedPrice ? (
                <>
                  <span className="w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-[#029FAE]">
                    ${product.discountedPrice.toFixed(2)} USD
                  </span>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="line-through w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-1 text-white bg-gray-500">
                      ${product.originalPrice.toFixed(2)} USD
                    </span>
                    {product.discountPercentage !== undefined && (
                      <span className="w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-red-500">
                        -{product.discountPercentage}%
                      </span>
                    )}
                  </div>
                </>
              ) : (
                <span className="w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-[#029FAE]">
                  ${product.originalPrice.toFixed(2)} USD
                </span>
              )}
            </div>

            {/* Ratings */}
            {product.ratings && (
              <div className="mt-3 flex items-center gap-2">
                <span className="text-lg font-bold text-[#272343]">
                  Rating:
                </span>
                {renderStars(product.ratings)}
              </div>
            )}

            {/* Inventory */}
            {product.inventory !== undefined && (
              <div className="mt-3 flex items-center gap-2">
                <span className="text-lg font-bold text-[#272343]">
                  In Stock:
                </span>
                <span className="text-lg">{product.inventory}</span>
              </div>
            )}

            {/* Badges */}
            {(product.isNew || product.isSale) && (
              <div className="mt-3 flex gap-2">
                {product.isNew && (
                  <span className="w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-[#029FAE]">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="w-fit rounded-3xl md:text-base text-sm px-2 md:px-3.5 py-2 text-white bg-[#F5813F]">
                    Sale
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="mt-6">
            <p className="text-[#272343]/60 tracking-wide text-sm md:text-lg">
              {product.description || "No description available."}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4 gap-3">
              <button
                className="bg-gray-300 text-black px-3 py-2 rounded-lg"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <FiMinus />
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                className="bg-[#029FAE] text-black px-3 py-2 rounded-lg"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <FiPlus />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-fit rounded-lg md:mt-5 mt-3 md:px-4 px-2 items-center md:gap-3 gap-1 py-2 md:py-3 text-white bg-[#029FAE] flex"
            >
              <BsCartDash className="size-5" /> Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Social Sharing Section */}
      <div className="mt-2 flex gap-4 justify-center mb-24">
        {/* Facebook */}
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href
          )}`}
          passHref
        >
          <FaFacebookF size={30} className="text-blue-600" />
        </Link>

        {/* Twitter */}
        <Link
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            product.title
          )}&url=${encodeURIComponent(window.location.href)}`}
          passHref
        >
          <FaTwitter size={30} className="text-blue-400" />
        </Link>

        {/* LinkedIn */}
        <Link
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            window.location.href
          )}&title=${encodeURIComponent(product.title)}`}
          passHref
        >
          <FaLinkedinIn size={30} className="text-blue-700" />
        </Link>

        {/* WhatsApp */}
        <Link
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            product.title
          )} ${encodeURIComponent(window.location.href)}`}
          passHref
        >
          <FaWhatsapp size={30} className="text-green-500" />
        </Link>

        {/* Copy Link */}
        <button
          onClick={() => copyToClipboard(window.location.href)}
          className="text-black"
        >
          <FaLink size={30} />
        </button>
      </div>

      {/* Promotions Section */}
      <SinglePagePromotion />

      {/* Popup/Toast Notification */}
      {showPopup && (
        <div className="fixed bottom-5 right-5 bg-[#029FAE] text-white py-3 px-5 rounded-lg shadow-lg flex items-center gap-3 z-50">
          <BsCartDash className="text-white" />
          <span className="font-semibold">Item added to cart!</span>
        </div>
      )}
    </main>
  );
};

export default ProductDetail;
