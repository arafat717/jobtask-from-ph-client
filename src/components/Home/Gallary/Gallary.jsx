/* eslint-disable react/no-unescaped-entities */


const Gallary = () => {
    const images = [
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',
        'https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201823.jpg?w=740&t=st=1690046797~exp=1690047397~hmac=bff00d00e1ae2d20ab18542fed7d645df4a953094dcf15ab3e90961747862ba3',

    ];
    return (
        <div className="container mx-auto mt-8 mb-5">
            <h1 className="uppercase text-center mb-5 font-bold"> college graduate's group pictures
            </h1>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                {images.map((imageUrl, index) => (
                    <div key={index} className="p-2">
                        <img
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallary;