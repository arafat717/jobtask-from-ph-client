import { useEffect, useState } from "react";
import MyCollegeCard from "./MyCollegeCard";


const MyCollege = () => {
    const [load, setLoad] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addinfo')
        .then(res=> res.json())
        .then(data=> setLoad(data))
    },[])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 m-5">
            {
                load.map(show=><MyCollegeCard key={show._id} show={show}></MyCollegeCard>)
            }
        </div>
    );
};

export default MyCollege;