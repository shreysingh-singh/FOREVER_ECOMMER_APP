import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Fotter() {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
      <div>
        <img src={assets.logo} className="w-32 mb-5" alt="" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>
      <div>
        <h2 className="text-xl font-medium mb-5">COMPANY</h2>
        <ul className="flex flex-col gap-1 text-gray-600 text-base hover:text-gray-950">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/">
            <p>About us</p>
          </NavLink>
          <NavLink to="/">
            <p>Delivery</p>
          </NavLink>
          <NavLink to="/">
            <p>Privacy policy</p>
          </NavLink>
        </ul>
      </div>
      <div className="flex flex-col gap-1 text-gray-600 text-base hover:text-gray-950">
        <h2>GET IN TOUCH</h2>
        <p>+1-212-4356</p>
        <p>demoweb@123gmail.com</p>
      </div>
      <div>
        <hr />
        <p className="py-5 ml-40 test-sm text-center">Copyright 2024 © GreatStack.dev - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Fotter;
