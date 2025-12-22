import { FaStar, FaEllipsisH, FaCheckCircle } from "react-icons/fa";

function ProductReviews() {
  return (
    <section className="w-full px-16 py-16">

      {/* TOP TABS */}
      <div className="flex justify-center gap-20 border-b mb-10 text-sm">
        <span className="pb-4 text-gray-400 cursor-pointer">
          Product Details
        </span>
        <span className="pb-4 border-b-2 border-black font-medium cursor-pointer">
          Rating & Reviews
        </span>
        <span className="pb-4 text-gray-400 cursor-pointer">
          FAQs
        </span>
      </div>

      {/* HEADER ROW */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">
          All Reviews <span className="text-gray-400 text-sm">(451)</span>
        </h2>

        <div className="flex items-center gap-4">
          <button className="bg-gray-100 px-4 py-2 rounded-full text-sm">
            Latest
          </button>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
            Write a Review
          </button>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className="grid grid-cols-2 gap-8">

        {/* REVIEW CARD */}
        {[
          {
            name: "Samantha D.",
            text:
              "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail.",
            date: "August 14, 2023",
          },
          {
            name: "Alex M.",
            text:
              "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
            date: "August 15, 2023",
          },
          {
            name: "Ethan R.",
            text:
              "This t-shirt is a must-have for anyone who appreciates good design. The fit is perfect.",
            date: "August 16, 2023",
          },
          {
            name: "Olivia P.",
            text:
              "This t-shirt represents simplicity and functionality. You can feel the creativity behind it.",
            date: "August 17, 2023",
          },
          {
            name: "Liam K.",
            text:
              "The fabric is soft, and the design speaks volumes about the designer’s skill.",
            date: "August 18, 2023",
          },
          {
            name: "Ava H.",
            text:
              "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy.",
            date: "August 19, 2023",
          },
        ].map((review, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 relative bg-white"
          >
            {/* MENU ICON */}
            <FaEllipsisH className="absolute top-6 right-6 text-gray-400" />

            {/* STARS */}
            <div className="flex text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* NAME + VERIFIED */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-semibold">{review.name}</span>
              <FaCheckCircle className="text-green-500 text-sm" />
            </div>

            {/* REVIEW TEXT */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              "{review.text}"
            </p>

            {/* DATE */}
            <p className="text-xs text-gray-400">
              Posted on {review.date}
            </p>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center mt-12">
        <button className="border px-6 py-3 rounded-full text-sm">
          Load More Reviews
        </button>
      </div>
    </section>
  );
}

export default ProductReviews;
