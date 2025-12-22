import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function NewArrivals() {
  return (
    <section className="w-screen px-12 py-16">

      {/* SECTION TITLE */}
      <h2 className="text-3xl font-extrabold text-center mb-12">
        NEW ARRIVALS
      </h2>

      {/* PRODUCTS ROW */}
      <div className="flex justify-between gap-8">

        {/* PRODUCT CARD */}
        <div className="w-1/4">
          {/* IMAGE BOX */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              alt="T-shirt"
              className="w-full h-72 object-cover rounded-md"
            />
          </div>
           <div className="mt-4 flex flex-col items-center text-center">

          {/* DETAILS */}
          <h3 className="mt-4 font-semibold">Classic T-Shirt</h3>

          {/* STAR RATING */}
          <div className="flex items-center gap-1 mt-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <span className="ml-2 text-sm text-gray-700">4.5/5</span>
          </div>

          {/* PRICE */}
          <p className="mt-2 font-bold text-lg">$120</p>
        </div>
        </div>

        {/* PRODUCT WITH DISCOUNT */}
        <div className="w-1/4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Shirt"
              className="w-full h-72 object-cover rounded-md"
            />
          </div>
             <div className="mt-4 flex flex-col items-center text-center">
          <h3 className="mt-4 font-semibold">Slim Fit Shirt</h3>

          <div className="flex items-center gap-1 mt-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
            <span className="ml-2 text-sm text-gray-700">3.5/5</span>
          </div>

          <div className="mt-2 flex gap-2 items-center">
            <span className="line-through text-gray-400">$180</span>
            <span className="font-bold text-lg">$140</span>
          </div>
        </div>
        </div>

        {/* PRODUCT */}
        <div className="w-1/4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              alt="Hoodie"
              className="w-full h-72 object-cover rounded-md"
            />
          </div>
            <div className="mt-4 flex flex-col items-center text-center">
          <h3 className="mt-4 font-semibold">Oversized Hoodie</h3>

          <div className="flex items-center gap-1 mt-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="ml-2 text-sm text-gray-700">5/5</span>
          </div>

          <p className="mt-2 font-bold text-lg">$220</p>
        </div>
        </div>

        {/* PRODUCT WITH DISCOUNT */}
        <div className="w-1/4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Jacket"
              className="w-full h-72 object-cover rounded-md"
            />
          </div>
          <div className="mt-4 flex flex-col items-center text-center">

          <h3 className="mt-4 font-semibold">Denim Jacket</h3>

          <div className="flex items-center gap-1 mt-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <span className="ml-2 text-sm text-gray-700">4.5/5</span>
          </div>

          <div className="mt-2 flex gap-2 items-center">
            <span className="line-through text-gray-400">$260</span>
            <span className="font-bold text-lg">$210</span>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}

export default NewArrivals;
