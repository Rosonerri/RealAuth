import img from "../assets/Wrist.png"
import img2 from "../assets/wrist2.jpg"
import img3 from "../assets/wrist3.jpg"
import img4 from "../assets/wrist4.jpg"
import img5 from "../assets/wrist5.jpg"
import img6 from "../assets/wristWhite.jpg"
import { FaStar } from "react-icons/fa";
import { BsCheck2 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import data from "../Api/data.json"

const Flash = () => {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center '>
        <div className='w-[95%] h-[100%] '>
          <div  className='font-[400] text-[17px] text-[grey]'>ACTIVITY TRACKING</div>
          <div className='w-[95%] flex justify-between items-center'>
            <div className='font-[700] text-[50px] mb-[40px]'>Flash Sale</div>
            <div className='flex '>
                <div className='border rounded-md bg-[#FF6A25] w-[50px] h-[50px] flex justify-center items-center flex-col font-[700] text-[white]'>
                    <div>365</div>
                    <div>days</div>
                </div>
                <div className='border rounded-md bg-[#FF6A25] w-[50px] h-[50px] flex font-[700] text-[white] flex-col justify-center items-center '>
                <div>10</div>
                <div>Hrs</div>
                </div>
                <div className='border rounded-md bg-[#FF6A25] w-[50px] h-[50px] font-[700] text-[white] flex-col flex justify-center items-center  '>
                <div>50</div>
                <div>Mins</div>
                </div>
                <div className='border rounded-md bg-[#FF6A25] w-[50px] h-[50px] flex font-[700] text-[white] flex-col justify-center items-center '>
                <div>30</div>
                <div>Secs</div>
                </div>
            </div>
            </div>
            <div className='w-[100%] h-[95%]  flex justify-between'>
                <div className="absolute right-[75%] ">
                    <div className="w-[50px] h-[40px] rounded-md bg-[#F5F5F5] flex justify-center items-center text-[30px] mt-[3px]"><CiSearch /></div>
                    <div className="w-[50px] h-[40px] rounded-md bg-[#F5F5F5] flex justify-center items-center text-[30px] mt-[3px]"><CiHeart /></div>
                    <div className="w-[50px] h-[40px] rounded-md bg-[#F5F5F5] flex justify-center items-center text-[30px] mt-[3px]"><IoIosGitCompare /></div>
                </div>
               {data.map((props: any) => (
                 <div className='w-[25%] h-[100%] relative'>
                   
                 <div className='h-[65%] w-[100%] cursor-pointer'>
                 <div className="text-[white] font-[600] absolute left-[5%]">
                <div className="bg-[#B52B2E] w-[50px] h-[20px] flex justify-center items-center">-5%</div>
                 <div className="bg-[#F2431B] w-[80px] h-[20px] mt-[5px] flex justify-center items-center">Featured</div>
                </div>
                     <img src={props.image} alt=""  className=""/>
                     <img src={img2} alt="" className="absolute top-0 left-0 w-[100%] h-[65%] object-cover opacity-0 hover:opacity-100 transition-all bg-[transparent]" />
                     {/* <img src={img2} alt=""  className="absolute opacity-0"/> */}
                     </div>
                 <button className="py-3 w-[95%] font-[600] bg-[#F5F5F5] hover:bg-[#F2431B] transition-all rounded-md opacity-1">Add to Cart</button>
                 <div>
                     <div className="font-bold mt-[10px]">{props.title}</div>
                     <div className="text-[rgb(254,64,55)] mt-[10px]">${props.price}</div>
                     <div className="flex text-[orange] mt-[20px]">
                         <FaStar />
                         <FaStar />
                         <FaStar />
                         <FaStar />
                         <FaStar />
                     </div>
                     <div  className="mt-[20px]">
                         <div className="flex">
                             <div className="rounded-[50%] w-[35px] h-[35px] border flex justify-center items-center">
                             <div className="rounded-[50%] w-[30px] h-[30px] bg-black flex justify-center items-center text-[white] font-bold">
                             <BsCheck2/>
                             </div>
                             </div>
                             
                             <div className="rounded-[50%] w-[35px] h-[35px] flex justify-center items-center">
                             <div className="rounded-[50%] w-[30px] h-[30px] bg-[#C4743F] flex justify-center items-center text-[white] font-bold">
                             {/* <BsCheck2/> */}
                             </div>
                             </div>

                             <div className="rounded-[50%] w-[35px] h-[35px] flex justify-center items-center">
                             <div className="rounded-[50%] w-[30px] h-[30px] bg-[rgb(254,64,55)] flex justify-center items-center text-[white] font-bold">
                             {/* <BsCheck2/> */}
                             </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
               ))}
                
               
               
            </div>
        </div>
    </div>
  )
}

export default Flash