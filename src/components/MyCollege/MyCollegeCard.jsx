/* eslint-disable react/prop-types */


const MyCollegeCard = ({ show }) => {
    const { address, candidateEmail, candidateName, candidatePhoneNumber, dateOfBirth, image, subject } = show;
    console.log(show)
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={image}
          alt={candidateName}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{candidateName}</h2>
        <p className="text-gray-600 text-sm mb-4">{subject}</p>
        <div className="border-t border-gray-300 pt-2">
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> {candidateEmail}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span> {candidatePhoneNumber}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Date of Birth:</span> {dateOfBirth}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Address:</span> {address}
          </p>
        </div>
      </div>
    );
};

export default MyCollegeCard;