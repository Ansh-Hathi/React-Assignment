import { useState } from "react";
import { FaStar } from "react-icons/fa";

function ProductDetailsTop() {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="w-full px-16 py-12">

      {/* BREADCRUMB */}
      <div className="text-sm text-gray-400 mb-10">
        Home &gt; Shop &gt; Men &gt; T-shirts
      </div>

      {/* MAIN GRID — NOTICE mx-auto IS REMOVED */}
      <div className="grid grid-cols-[120px_520px_1fr] gap-16 items-start">

        {/* THUMBNAILS */}
        <div className="flex flex-col gap-5">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-xl p-3 cursor-pointer"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="thumbnail"
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* MAIN IMAGE — MOVED LEFT NATURALLY */}
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-12">
          <img
            src="https://via.placeholder.com/450"
            alt="product"
            className="h-100"
          />
        </div>

        {/* PRODUCT DETAILS */}
        <div className="pr-16">

          <h1 className="text-4xl font-extrabold mb-4">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm text-gray-500">4.5/5</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">$260</span>
            <span className="text-2xl text-gray-400 line-through">$300</span>
            <span className="text-sm bg-red-100 text-red-500 px-3 py-1 rounded-full">
              -40%
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">
            This graphic t-shirt which is perfect for any occasion.
            Crafted from a soft and breathable fabric, it offers superior
            comfort and style.
          </p>

          <hr className="mb-7" />

          {/* COLORS */}
          <div className="mb-7">
            <p className="text-sm font-medium mb-4">Select Colors</p>
            <div className="flex gap-4">
              <span className="w-9 h-9 bg-[#5C4B2E] rounded-full border-2 border-black"></span>
              <span className="w-9 h-9 bg-[#2F4F4F] rounded-full"></span>
              <span className="w-9 h-9 bg-[#2E2E5D] rounded-full"></span>
            </div>
          </div>

          <hr className="mb-7" />

          {/* SIZE */}
          <div className="mb-9">
            <p className="text-sm font-medium mb-4">Choose Size</p>
            <div className="flex gap-4">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 rounded-full text-sm ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CART */}
          <div className="flex items-center gap-8">
            <div className="flex items-center bg-gray-100 rounded-full px-5 py-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-xl px-2"
              >
                −
              </button>
              <span className="px-5">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-xl px-2"
              >
                +
              </button>
            </div>

            <button className="w-60 bg-black text-white py-4 rounded-full text-sm font-medium">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductDetailsTop;
