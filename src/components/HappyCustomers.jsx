import { FaStar, FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

function HappyCustomers() {
  return (
    <section className="w-screen px-12 py-20">

      {/* HEADER ROW */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-extrabold">
          OUR HAPPY CUSTOMERS
        </h2>

        {/* ARROWS */}
        <div className="flex gap-4 text-xl cursor-pointer">
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="flex gap-6 overflow-hidden">

        {/* CARD 1 */}
        <div className="w-1/3 border rounded-2xl p-6">
          {/* STARS */}
          <div className="flex gap-1 text-yellow-500 mb-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          {/* NAME */}
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-bold">Sarah M.</h3>
            <FaCheckCircle className="text-green-500 text-sm" />
          </div>

          {/* REVIEW */}
          <p className="text-gray-600 text-sm leading-relaxed">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations."
          </p>
        </div>

        {/* CARD 2 */}
        <div className="w-1/3 border rounded-2xl p-6">
          <div className="flex gap-1 text-yellow-500 mb-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-bold">Alex K.</h3>
            <FaCheckCircle className="text-green-500 text-sm" />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable."
          </p>
        </div>

        {/* CARD 3 */}
        <div className="w-1/3 border rounded-2xl p-6">
          <div className="flex gap-1 text-yellow-500 mb-4">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-bold">James L.</h3>
            <FaCheckCircle className="text-green-500 text-sm" />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection is diverse
            and on-point with the latest trends."
          </p>
        </div>

      </div>
    </section>
  );
}

export default HappyCustomers;
