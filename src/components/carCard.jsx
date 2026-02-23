import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { Skeleton } from './ui/skeleton';
const CarCard = ({car, loading}) => {
    if (loading) <Skeleton className="h-64 w-full rounded-2xl"/>
  return (
    <div className="bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105
    cursor-pointer">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover"/>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold  text-lg">{car.name}</h3>
        <p className="text-gray-400 mt-1 text-sm">{car.category}</p>
        <div className='flex justify-between items-center'>
        <span className="font-bold text-[#eb99ff]">${car.price}/day</span>
         <span className="text-yellow-400 font-bold flex items-center justify-center gap-1">{car.rating} 
            <IoStarSharp/></span>
        </div>
        <p className={`text-sm ${car.available ? "text-green-500" : "text-red-500"}`}>
            {car.available ? "Available" : "Not Available"}
        </p>
      </div>
    </div>
  )
}

export default CarCard
