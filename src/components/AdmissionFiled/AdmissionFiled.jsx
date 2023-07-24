
import { useContext } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';



const AdmissionFiled = () => {
    const { user } = useContext(AuthContex)
    const handleAdd = event => {
        event.preventDefault()
        const form = event.target;
        const candidateName = form.candidateName.value;
        const candidateEmail = user?.email;
        const image = form.image.value;
        const subject = form.subject.value;
        const dateOfBirth = form.dateOfBirth.value;
        const candidatePhoneNumber = form.candidatePhoneNumber.value;
        const address = form.address.value;
        const info = {
            dateOfBirth, address, image, candidateEmail, candidateName, subject, candidatePhoneNumber,
        }

        console.log(info)
        fetch('http://localhost:5000/addinfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('added succesful')
                    form.reset()
                }
            })
    }
    return (
        <form onSubmit={handleAdd} className="w-full max-w-lg mx-auto mt-8 shadow-lg mb-8 bg-white p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Candidate Name</label>
                    <input
                        type="text"
                        name="candidateName"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter candidate's name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter subject"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Candidate Email</label>
                    <input
                        type="email"
                        name="candidateEmail"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter candidate's email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Candidate Phone number</label>
                    <input
                        type="tel"
                        name="candidatePhoneNumber"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter candidate's phone number"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                        type="text"
                        name="address"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter address"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter date of birth"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Candidate image</label>
                    <input
                        type="text"
                        name="image"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        placeholder="Enter candidate's image"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="mt-6 py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
                Submit
            </button>
        </form>
    );
};

export default AdmissionFiled;