import { FaAngleDown} from "react-icons/fa6";
import img from "../assets/Logo.png"
import img2 from "../assets/wrist4.jpg"
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";


const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false)
 
  return (
    <div className="border-b w-[100%] h-[60px] flex items-center justify-center sticky top-[0%] left-[0px]  bg-white z-50">
      <div className="border-b w-[95%] h-[100%] flex items-center justify-between bg-white">
        <div><img src={img} alt="" className="w-[90px]"/></div>
        <div className="flex  w-[30%] justify-between font-[500]">
          <nav>Home</nav>
          <nav className="flex justify-center items-center">
            Shop
            <FaAngleDown className="mt-[5px] ml-[5px]"/>
          </nav>
          <nav className="flex justify-center items-center">
            Pages
            <FaAngleDown className="mt-[5px] ml-[5px]"/>
          </nav>
          <nav className="flex justify-center items-center">
            Blogs
          <FaAngleDown className="mt-[5px] ml-[5px]"/>
          </nav>
          <nav>
            Contact Us
          </nav>
        </div>
        <div className="flex justify-between items-center w-[10%] h-[60%] text-[27px]">
        <CiSearch />
        <CiHeart />
        <div className="border py-3"></div>
        <IoCartOutline className="mr-[10px] cursor-pointer"
        onClick = {() =>{
          setToggle(!toggle)
        }} 
        />
        <div className="w-[20px] h-[20px] absolute bg-[#FF6A25] rounded-[50%] flex justify-center items-center text-[white] font-[700] text-[14px] right-[36px] top-[10px] cursor-pointer">2</div>
       {toggle && (
         <div className="border shadow-md w-[400px] h-[430px] bg-[white] absolute left-[70%] top-[90%] rounded-md flex items-center flex-col">
         <div className="text-[15px] text-center font-semibold mb-[10px]">Flash WristWatch</div>
         <div className="w-[95%] h-[70px] flex items-center justify-center border-b">
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
             <img src={img2} alt="" className="w-[50px] object-cover" />
           </div>
           <div className="w-[31%] h-[100%]  text-[15px] items-center flex justify-center font-bold">
             <span className="mr-[30px]">1</span>
             <span  className="text-[#FF6A25]">$233.00</span>
           </div>
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
           <MdDeleteForever className="cursor-pointer"/>
           </div>
         </div>
         <div className="text-[15px] text-center font-semibold mb-[10px]">Limited Edition</div>
         <div className="w-[95%] h-[70px] flex items-center justify-center border-b">
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
             <img src={img2} alt="" className="w-[50px] object-cover" />
           </div>
           <div className="w-[31%] h-[100%]  text-[15px] items-center flex justify-center font-bold">
             <span className="mr-[30px]">1</span>
             <span  className="text-[#FF6A25]">$233.00</span>
           </div>
           <div className="w-[31%] h-[100%]  items-center flex justify-center">
           <MdDeleteForever className="cursor-pointer"/>
           </div>
         </div>
         <div className="text-[15px] text-center font-semibold mb-[10px] flex justify-between w-[95%] mt-[10px]">
           <h3>Subtotal:</h3>
           <h3>$266</h3>
         </div>
         <div className="text-[15px] text-center font-semibold mb-[10px] flex justify-between w-[95%] mt-[20px]">
           <div className="absolute w-[94%] rounded-[20px] bg-[grey] h-[15px]"></div>
           <div className="absolute w-[10%] rounded-[20px] bg-[#FF6A25] h-[15px]"></div>
           
         </div>
         <div className="text-[15px] font-semibold mt-[20px]">Spend $1,080.00 more to reach FREE SHIPPING!</div>
         <div className="flex text-[16px] mt-[30px]">
           <button className="py-5 px-10 bg-black text-[white] font-[600] rounded-md">View Cart</button>
           <button className="py-5 px-10 bg-[#FF6A25] text-[white] font-[600] rounded-md ml-[10px]">CheckOut</button>
         </div>
         </div>
       )}
        </div>
      </div>
    </div>
  )
}

export default Header