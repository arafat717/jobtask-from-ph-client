/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AdmissionCard = ({ colleges }) => {
    console.log(colleges)
    return (
        <section className="gradient-background py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white">Recommended colleges</h2>
                <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {colleges.map((paper) => (
                        <div
                            key={paper.id}
                            className="bg-white overflow-hidden shadow-md rounded-lg divide-y divide-gray-200"
                        >
                            <div className="px-4 py-5 sm:p-6">
                                <Link to='/admissionfiled'>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">{paper.name}</h3>
                                </Link>

                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdmissionCard;