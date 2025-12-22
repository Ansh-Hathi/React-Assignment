
import { FaTrash } from "react-icons/fa";

function CartItem({ title, size, color, price, image }) {
  return (
    <div className="flex items-center justify-between">

      {/* LEFT */}
      <div className="flex gap-5">

        <img
          src={image}
          alt={title}
          className="w-24 h-24 bg-gray-100 rounded-xl object-cover"
        />

        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">Size: {size}</p>
          <p className="text-sm text-gray-500">Color: {color}</p>
          <p className="mt-2 font-bold">{price}</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end gap-6">

        <FaTrash className="text-red-500 cursor-pointer" />

        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <button className="px-2 text-lg">−</button>
          <span className="px-4">1</span>
          <button className="px-2 text-lg">+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;