import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";


function Header() {
  return <div className=" px-4 h-[70px] bg-orange-500 flex justify-between items-center ">
    <Menu />
    <div className="p space-x-8">
      <Link className="text-lg" to="/">Home</Link>
      <Link className="text-lg" to="/about">About</Link>
      <Link className="text-lg" to="/switch">Switch</Link>
    </div>
  </div>;
}

export default Header;
