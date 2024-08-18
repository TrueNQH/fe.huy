import Profile from "./Profile";

import 'bootstrap/dist/css/bootstrap.min.css';
import DescribeProduct from "./DescribeProduct";
import MoreProduct from "./MoreProduct";
import SlideShow from './SlideShow';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./style.css";

function DetailProduct() {
    return (
       <div>
        <div class="container">
            <div class="row">
                
                <SlideShow />
                <Profile />
            </div>
            <div className="row">
                <DescribeProduct/>
                <MoreProduct/>
            </div>
          
        </div>
       </div>
    )
}
export default DetailProduct;