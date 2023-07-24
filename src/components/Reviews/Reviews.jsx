import { useEffect, useState } from "react";
import ReviewsSection from "./ReviewsSection";


const Reviews = () => {
    const [collegeses, setColleges] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/addreview`)
        .then(res=>res.json())
        .then(data=>setColleges(data))
    },[])
    
    return (
        <div>
            {
                collegeses.map(colleges=> <ReviewsSection key={colleges._id} colleges={colleges.colleges}></ReviewsSection>)
            }
        </div>
    );
};

export default Reviews;