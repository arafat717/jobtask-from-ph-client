import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContex)
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center">
                <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={user.photoURL}
                    alt={`Profile of ${user.displayName}`}
                />
                <div>
                    <h2 className="text-xl font-semibold">{user.displayName}</h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>
            <div className="mt-4">
            </div>
        </div>
    );
};

export default Profile;