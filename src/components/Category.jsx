import React,{useEffect,useState} from 'react'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

const Category = () => {
    const [category,setCategory]=useState([]);
    const fetchCategory=async ()=>{
        const response=await fetch("https://raw.githubusercontent.com/chinmayakumardas/swiggy_clone/main/public/data/category.json");
        const data=await response.json();
        setCategory(data);
        console.log(data);  
    }
   
    useEffect(()=>{
       fetchCategory();
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
        <div className='flex'>
        {
          category.map((cat, index) => (
                        <div className='flex-grow-1 p-2' key={index}>
                            <img src={cat.image} alt={cat.path} />
                        </div>
                    ))
        }
        </div>

    </div>
  )
}

export default Category