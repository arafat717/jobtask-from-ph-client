/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";



const AllCardDetails = () => {
    const college = useLoaderData();

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
        <div className="max-w-3xl mt-5 mx-auto bg-white rounded-lg overflow-hidden shadow-lg mb-8">
            <img
                className="w-full h-64 object-cover object-center"
                src={college_image}
                alt="College"
            />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{college_name}</h2>
                <div className="flex items-center mb-4">
                    <span className="text-yellow-600 font-bold text-lg mr-2">Rating:</span>
                    <span className="text-lg">{college_rating}</span>
                </div>
                <div className="flex items-center mb-4">
                    <span className="text-lg font-bold mr-2">Admission Date:</span>
                    <span className="text-lg">{admission_date}</span>
                </div>
                <div className="flex items-center mb-4">
                    <span className="text-lg font-bold mr-2">Research Publications:</span>
                    <span className="text-lg">{research_publications}</span>
                </div>
                <div className="font-bold text-xl mb-4">Events:</div>
                <ul>
                    {events.map((event, index) => (
                        <li key={index} className="mb-2">
                            <span className="font-bold mr-2">{event.event_name}</span>
                            <span className="text-gray-600">{event.description}</span>
                        </li>
                    ))}
                </ul>
                <div className="font-bold text-xl mt-4 mb-2">Sports:</div>
                <ul>
                    {sports.map((sport, index) => (
                        <li key={index} className="mb-2">
                            <span className="font-bold mr-2">{sport.sport_name}</span>
                            <span className="text-gray-600">Team: {sport.team_name}</span>
                            <span className="text-gray-600 ml-4">Coach: {sport.coach}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AllCardDetails;