import React from 'react'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";
const Category = () => {
    const [category,setCategory]=useState([]);
    const fetchCategory=async ()=>{
        const response=await fetch("./data/category.json");
        const data=await response.json();
    }

    useEffect(()=>{

    },[])
  return (
    <div className='max-w-[1200px] mx-auto r'>
        <div className='flex my-3 items-center justify-between'>
           <div className='text-[25px] font-bold'>What's on your mind?</div> 
           <div className='flex '>
                <div className= 'cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'>
                <FaArrowLeft />
                </div>
                <div className=' cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center'>
                <FaArrowRight />
                </div>           
           </div>
        </div>

    </div>
  )
}

export default Category