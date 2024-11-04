import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner */}
            <Banner />

            {/* heading */}
            <Heading
                title='Browse Coffees by Category'
                subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste.'
            />

            {/* categories tab section */}
            <Categories categories={categories} />

            {/* dynamic nested component */}
            <Outlet />
        </div>
    );
};

export default Home;