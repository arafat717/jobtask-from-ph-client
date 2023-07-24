
import Colleges from "./Colleges/Colleges";
import Gallary from "./Gallary/Gallary";
import Research from "./Research/Research";

import Reviews from "../Reviews/Reviews";




const Home = () => {
    return (
        <div className="gradient-background">
           <Colleges></Colleges>
           <Gallary></Gallary>
           <Research></Research>
          
           <Reviews></Reviews>
        </div>
    );
};

export default Home;