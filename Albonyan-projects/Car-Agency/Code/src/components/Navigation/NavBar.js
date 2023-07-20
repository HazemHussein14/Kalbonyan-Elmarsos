import NavLinks from "./NavLinks";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SlideNav from "./SlideNav";
import Cart from "../Cart/Cart";

function NavBar() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [sticky, setSticky] = useState("");
  const [showCart, setShowCart] = useState(false);
  const cartQuantity = useSelector((state) => state.totalQuantity);

  const toggleSideNav = () => {
    setIsSideOpen((prevState) => !prevState);
  };

  const checkIsVisited = (val) => {
    if (val) {
      toggleSideNav();
    }
  };

  const showCartHandler = () => {
    setShowCart((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 550 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  return (
    <header
      className={`px-6 bg-[#fdfdfd] ${
        sticky ? sticky : "absolute w-full lg:bg-transparent"
      }`}
    >
      <nav
        className={`flex items-center justify-between p-4 ${
          !sticky && "lg:text-white"
        }`}
      >
        <a href="#home" className="text-3xl">
          <b>Your</b>Car
        </a>
        <div className="flex items-center gap-5">
          <NavLinks checkIsVisited={checkIsVisited} isSticky={sticky} />
          <button
            className={`relative text-2xl transition duration-300 hover:text-[--primary-color] ${
              showCart && "text-[--primary-color]"
            }`}
            onClick={showCartHandler}
          >
            <span className="absolute w-[20px] h-[20px] -top-1 -right-3 text-[--secondary-color] font-bold text-[12px] text-center rounded bg-[#F8D7A4] flex items-center justify-center">
              {cartQuantity}
            </span>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <button className="text-2xl lg:hidden" onClick={toggleSideNav}>
            {isSideOpen ? (
              <i className="fa-sharp fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>

        <SlideNav isSideOpen={isSideOpen} checkIsVisited={checkIsVisited} />
        <Cart showCart={showCart} setShowCart={setShowCart}/>
      </nav>
    </header>
  );
}

export default NavBar;