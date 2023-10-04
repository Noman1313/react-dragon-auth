import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl font-semibold">All category</h2>
            {
                categories.map(category => <NavLink
                to={`/category/${category.id}`}
                    className="block ml-4 text-xl font-semibold py-5 btn btn-ghost"
                    key={category.id}>
                    {category.name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;