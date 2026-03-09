import { NavLink, Outlet } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

function Layout() {
  const { amount } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Redux Store</h1>
              </div>
              <div className="flex gap-4">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md font-medium ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/cart"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md font-medium relative ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  Cart
                  {amount > 0 && (
                    <span className="absolute top-full left-full -translate-x-1/2 -translate-y-1/2 aspect-square min-w-2 min-h-2 max-w-8 max-h-8 flex items-center justify-center rounded-full bg-blue-600 text-white border-2 border-black text-xs sm:text-sm px-2 overflow-hidden">
                      {amount}
                    </span>
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
