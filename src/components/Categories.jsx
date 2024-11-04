// import PropTypes from 'prop-types';

import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted">
            {
                categories.map(category => (
                    <NavLink
                        key={category.category}
                        to={`/category/${category.category}`}
                        role="tab"
                        className={({ isActive }) => `tab text-2xl ${isActive? 'tab-active, bg-yellow-100': ''}`}>
                        {category.category}
                    </NavLink>
                ))
            }

        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
    category: PropTypes.object
};

export default Categories;