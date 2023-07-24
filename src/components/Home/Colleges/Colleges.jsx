import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";



const Colleges = () => {
    const [colleges, setColleges] = useState([])
    const [searchtext, setSearchtext] = useState(" ")

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    const handlesearch = () =>{
        fetch(`http://localhost:5000/searchname/${searchtext}`)
        .then(res=>res.json())
        .then(data=>{
            setColleges(data)
        })
    }

    return (
        <div>
            <div className="flex flex-col w-full mt-4">
                {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center"><h1 className="text-center text-xl  text-white">Search your college</h1></div> */}
                <div className="divider">
                    <div>
                        <input className="p-3" onChange={(e) => setSearchtext(e.target.value)} type="search" name="search" placeholder="search" id="" />
                        <button onClick={handlesearch} className="btn btn-active ml-2">search</button>
                    </div>
                </div>
            </div>
            <div className=" gap-2">
                {
                    colleges.map(collegeData => <CollegeCard key={collegeData._id} collegeData={collegeData}></CollegeCard>)
                }
            </div>
        </div>
    );
};

export default Colleges;