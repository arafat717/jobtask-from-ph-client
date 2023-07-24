import { FaFacebook , FaTwitter , FaInstagram} from "react-icons/fa";
import moment from 'moment';

const Footer = () => {
    const currentDate = moment().format('YYYY-MM-DD');
    return (
        <footer className="bg-base-300 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left Section */}
                    <div>
                        <img src="https://img.freepik.com/premium-vector/campus-collage-university-education-logo-design-template_7492-61.jpg?w=740" alt="Website Logo" className=" w-36 rounded-full ml-2 mb-6" />
                        <p className="uppercase text-2xl text-red-400">College Service</p>
                    </div>

                    {/* Middle Sections */}
                    <div className="text-white">
                        <h2 className="text-xl font-semibold mb-6">Contact</h2>
                        <p>Email: arafatjibon33@gmail.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Address: 1234 Main St, sherpur, Bangladesh</p>
                    </div>

                    <div className="text-white">
                        <h2 className="text-xl font-semibold mb-6">Explore</h2>
                        <ul>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/services">Services</a>
                            </li>
                            <li>
                                <a href="https://arafatjibon.netlify.app/">Portfolio</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="text-white">
                        <h2 className="text-xl font-semibold mb-6">Social Media</h2>
                        <div className="flex items-center mb-6">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                <FaFacebook></FaFacebook>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                                <FaInstagram></FaInstagram>
                            </a>
                            {/* Add more social media links as needed */}
                        </div>
                        <p>Join us on social media for updates and exciting content!</p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 text-white text-center">
                    <p>&copy; {currentDate} <span className="uppercase text-2xl m-2 text-red-400">College Service</span>. All rights reserved.</p>
                    <p>Privacy Policy | Terms of Service | Disclaimer</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;