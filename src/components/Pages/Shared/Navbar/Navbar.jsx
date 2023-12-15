import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import './navbar.css'

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto text-white py-8 flex justify-between items-center">
            <div>
                <Link to="/">
                    {/* <h1 className="text-2xl">Watch TV</h1> */}
                    <img src="http://flixtv.volkovdesign.com/main/img/logo.svg" alt="" />
                </Link>
            </div>
            <div className="flex justify-center items-center gap-10 font-semibold">
                <div className="home">Home</div>
                <div className="catalog">Catalog</div>
                <div className="pricing">Pricing plans</div>
                <div className="live">LIVE <span className="text-red-500 text-5xl absolute -mt-7 ml-1">.</span></div>
                <div className="text-2xl font-bold -mt-3 dot">...</div>
            </div>
            <div>
                <form>
                    <input className="outline-none text-white bg-[#151f30] shadow-sm rounded-xl py-2 px-3 w-[250px]" type="text" placeholder="I'm looking for" /><IoSearchSharp className=" search" />
                </form>
            </div>
            <div className="cursor-pointer login">
                <h1 className="flex items-center gap-x-3">Sign in <TbLogin className="text-[#2f80ed] text-2xl"/></h1>
            </div>
        </div>
    );
};

export default Navbar;