import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreadingNews = () => {
    return (
        <div className="flex gap-5 my-5">
            <button className='btn btn-error'>Breaking News...</button>
            <Marquee pauseOnHover={true}>
                <Link className="mr-12" to='/'>I can be a React component, multiple React components, or just.....</Link>
                <Link className="mr-12" to='/'>I can be a React component, multiple React components.....</Link>
                <Link className="mr-12" to='/'>I can be a React component, labiba.. amr phone dhorbi na...ami akn ghomabo distrub korbi na....</Link>
            </Marquee>
        </div>
    );
};

export default BreadingNews;