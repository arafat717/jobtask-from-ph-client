/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CollegeCard = ({ collegeData }) => {
    const {
        _id,
        college_image,
        name,
        college_admission_dates,
        events,
        research_history,
        sports,
        admission_process,
        events_details,
        research_work,
        sports_category,
    } = collegeData;
    return (
        <div className="m-4">
            <div className="card lg:card-side bg-slate-900 shadow-xl">
                <figure><img src={college_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name : {name}</h2>
                    <p>Admissin Date : {college_admission_dates.fall}</p>
                    <p><span className="uppercase text-xl">events</span> {events.map((event) => (
                        <li key={event}>{event}</li>
                    ))}</p>
                    <p>{research_history}</p>
                    <p><span className="uppercase text-xl">Sports</span> {sports.map((sport) => (
                        <li key={sport}>{sport}</li>
                    ))}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/details/${_id}`}> <button className="btn btn-primary">DEATILS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;