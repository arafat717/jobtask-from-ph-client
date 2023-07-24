/* eslint-disable react/prop-types */


const ReviewsSection = ({ colleges }) => {
    console.log(colleges)
    return (
        <div>
            <h1 className="uppercase font-extrabold text-center">Welcome to College Reviews</h1>
            {colleges.map((college) => (
                <section key={college.name} className="gradient-background py-12">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-white">Reviews for {college.name}</h2>
                        <div className="mt-8 text-white">
                            {college.reviews.length === 0 ? (
                                <p>No reviews yet for {college.name}. Be the first to leave a review!</p>
                            ) : (
                                college.reviews.map((review) => (
                                    <div key={review.id} className="border-b border-gray-200 py-4">
                                        <h3 className="text-lg font-medium text-white">{review.title}</h3>
                                        <p className="mt-2 text-sm text-white">{review.date}</p>
                                        <p className="mt-2 text-base text-white">{review.content}</p>
                                        <div className="mt-2 flex items-center">
                                            <span className="mr-2 text-sm font-medium text-white">Rating:</span>
                                            <div className="flex items-center">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        className={`h-5 w-5 fill-current ${index < review.rating ? 'text-yellow-500' : 'text-white'
                                                            }`}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M4.293 16.293a1 1 0 0 1-1.414-1.414l7-7a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L10 10.414l-5.293 5.293z"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ReviewsSection;