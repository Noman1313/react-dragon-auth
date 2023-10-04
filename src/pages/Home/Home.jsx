import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreadingNews from "./BreadingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData()
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <BreadingNews></BreadingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news category */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews=><NewsCard
                        key={aNews._id}
                        news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;