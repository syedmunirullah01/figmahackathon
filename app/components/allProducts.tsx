"use client";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client"; // Adjust the import path as needed

type Product = {
  id: string; // Using string for IDs as Sanity returns strings for _id
  title: string;
  image: string; // Image will be a string (URL)
  originalPrice?: number;
  discountedPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};



const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} className="group relative rounded-lg bg-white">
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {product.isNew && (
        <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
          New
        </Badge>
      )}
      {product.isSale && (
        <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
          Sale
        </Badge>
      )}
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
      </Link>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
        <div className="mt-1 flex items-center gap-2">
          {product.discountedPrice && (
            <span className="text-lg font-medium text-[#1C1B1F]">
              ${product.discountedPrice}
            </span>
          )}
          {product.originalPrice && (
            <span
              className={`text-sm ${
                product.discountedPrice
                  ? "text-gray-500 line-through"
                  : "text-[#1C1B1F]"
              }`}
            >
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <button
        className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
        aria-label={`Add ${product.title} to cart`}
      >
        <ShoppingCart className="h-5 w-5" />
      </button>
    </div>
  </div>
);

export default function AllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [sortOption, setSortOption] = useState("none"); // Sorting state

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Items per page
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"] {
        _id,
        title,
        originalPrice,
        discountedPrice,
        "image": image.asset->url,  // Fetch URL from Sanity directly
        isNew,
        isSale
      }`;

        const data: {
          _id: string;
          title: string;
          originalPrice?: number;
          discountedPrice?: number;
          image: string;
          isNew?: boolean;
          isSale?: boolean;
        }[] = await client.fetch(query);
        console.log("Fetched products:", data);

        const formattedProducts = data.map((product) => ({
          id: product._id, // Use _id from Sanity
          title: product.title,
          originalPrice: product.originalPrice,
          discountedPrice: product.discountedPrice,
          image: product.image, // This is already the URL string
          isNew: product.isNew,
          isSale: product.isSale,
        }));

        setProducts(formattedProducts); // Set state to properly typed Product[]
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting logic
  const sortedProducts = [...filteredProducts];
  if (sortOption === "lowToHigh") {
    sortedProducts.sort(
      (a, b) =>
        (a.discountedPrice || a.originalPrice || 0) -
        (b.discountedPrice || b.originalPrice || 0)
    );
  } else if (sortOption === "highToLow") {
    sortedProducts.sort(
      (a, b) =>
        (b.discountedPrice || b.originalPrice || 0) -
        (a.discountedPrice || a.originalPrice || 0)
    );
  }

  // Get the products for the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return (
      <div className="text-center py-10 text-lg font-semibold">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500 text-lg font-semibold">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-20 ">
      <h1 className="text-3xl text-center font-semibold text-[#1C1B1F] tracking-tight mb-8">
        Our Products
      </h1>

      {/* Search Bar and Sort By in One Line */}
      <div className="flex justify-between items-center mb-8 space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border border-[#00A294] rounded-lg w-64"
        />

        {/* Sort By Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-3 border border-[#00A294] rounded-lg hidden md:block"
        >
          <option value="none">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center gap-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-full ${
              currentPage === index + 1
                ? "bg-[#00B5A5] text-white"
                : "bg-white text-[#1C1B1F] border border-gray-300"
            } transition-colors hover:bg-[#00A294] hover:text-white`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
