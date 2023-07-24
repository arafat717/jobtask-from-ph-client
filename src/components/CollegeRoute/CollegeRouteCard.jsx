/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CollegeRouteCard = ({ college }) => {
    const {
        _id,
        college_image,
        college_name,
        college_rating,
        admission_date,
        research_publications,
        events,
        sports,
      } = college;
    return (
        <div className="max-w-xs bg-slate-500 rounded overflow-hidden shadow-lg m-4">
            <img
                className="w-full h-40 object-cover object-center"
                src={college_image}
                alt="College"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{college_name}</div>
                <div className="text-yellow-600 font-bold mb-2">Rating: {college_rating}</div>
                <div className="text-sm mb-2">Admission Date: {admission_date}</div>
                <div className="text-sm mb-2">Research Publications: {research_publications}</div>
            </div>
            <Link to={`/allcard/${_id}`}><button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                Details
            </button></Link>
        </div>
    );
};

export default CollegeRouteCard;