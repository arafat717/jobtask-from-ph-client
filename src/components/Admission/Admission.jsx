import { useEffect, useState } from "react";
import AdmissionCard from "./AdmissionCard";


const Admission = () => {
    const [collegeses, setColleges] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/addreview`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    return (
        <div>
            {
                collegeses.map(colleges => <AdmissionCard key={colleges._id} colleges={colleges.colleges}></AdmissionCard>)
            }
        </div>
    );
};

export default Admission;