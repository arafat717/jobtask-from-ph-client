import { useEffect, useState } from "react";
import CollegeRouteCard from "./CollegeRouteCard";


const CollegeRoute = () => {
    const [data, setData]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allcard')
        .then(res=>res.json())
        .then(data=> setData(data))
    },[])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 mx-auto">
            {
                data.map(college=><CollegeRouteCard key={college._id} college={college}></CollegeRouteCard>)
            }
        </div>
    );
};

export default CollegeRoute;