/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
    const { _id,
        college_image,
        name,
        college_admission_dates,
        events,
        research_history,
        sports,
        admission_process,
        events_details,
        research_work,
        sports_category, } = data;
    return (
        <div className="gradient-background rounded-lg shadow-md p-6">
            <img
                src={college_image}
                alt={name}
                className="w-full h-full object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-white mb-2">{name}</h2>
            <div className="mb-4">
                <p className="text-white font-medium">Admission Dates:</p>
                <ul className="list-disc pl-6">
                    <li>Fall: {college_admission_dates.fall}</li>
                    <li>Spring: {college_admission_dates.spring}</li>
                </ul>
            </div>
            <div className="mb-4">
                <p className="text-white font-medium">Events:</p>
                <ul className="list-disc pl-6">
                    {events.map((event) => (
                        <li key={event}>{event}</li>
                    ))}
                </ul>
            </div>
            <p className="text-white mb-4">Research History: {research_history}</p>
            <div className="mb-4">
                <p className="text-white font-medium">Sports:</p>
                <ul className="list-disc pl-6">
                    {sports.map((sport) => (
                        <li key={sport}>{sport}</li>
                    ))}
                </ul>
            </div>
            <p className="text-white mb-4">{admission_process}</p>
            <div className="mb-4">
                <p className="text-white font-medium">Event Details:</p>
                <ul className="list-disc pl-6">
                    {Object.entries(events_details).map(([event, details]) => (
                        <li key={event}>
                            <strong>{event}:</strong> {details}
                        </li>
                    ))}
                </ul>
            </div>
            <p className="text-white mb-4">{research_work}</p>
            <div className="mb-4">
                <p className="text-white font-medium">Sports Categories:</p>
                <ul className="list-disc pl-6">
                    {Object.entries(sports_category).map(([sport, category]) => (
                        <li key={sport}>
                            <strong>{sport}:</strong> {category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Details;