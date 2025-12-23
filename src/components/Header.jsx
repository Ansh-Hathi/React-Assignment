import { FiSearch, FiShoppingCart, FiUser, FiChevronDown } from "react-icons/fi";

function Header() {
  return (
    <header className="w-screen border-b">
      <div className="flex items-center px-8 py-4">
        
        {/* LEFT: LOGO */}
        <div className="flex-shrink-0">
          <h1 className="text-3xl font-extrabold tracking-tight">
            SHOP.CO
          </h1>
        </div>

        {/* CENTER: NAV */}
      <nav className="flex flex-1 justify-center items-center gap-32 text-sm font-medium">
  <div className="flex items-center gap-1 cursor-pointer">
    <span>Shop</span>
    <FiChevronDown size={14} />
  </div>
  <span className="cursor-pointer">On Sale</span>
  <span className="cursor-pointer">New Arrivals</span>
  <span className="cursor-pointer">Brands</span>
</nav>


        {/* RIGHT: SEARCH + ICONS */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-72">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>

          {/* Icons */}
          <FiShoppingCart className="cursor-pointer" size={25} />
          <FiUser className="cursor-pointer" size={25} />
        </div>

      </div>
    </header>
  );
}

export default Header;
