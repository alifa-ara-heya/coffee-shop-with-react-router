// import PropTypes from 'prop-types';

import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const navigate = useNavigate();

    const data = useLoaderData();
    const { category } = useParams();
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(coffee => coffee.category === category);

            setCoffees(filteredByCategory)
        } else {
            setCoffees(data.slice(0, 6))
        }

    }, [category, data])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {/* {data.map(coffee => <Card key={coffee.id} coffee={coffee}/> */}
                {
                    coffees.map(coffee => (<Card key={coffee.id} coffee={coffee} />))
                }
            
            </div>
            
            {/* if we want to navigate to 'coffee' page, we will use this  */}
            <button className="btn bg-yellow-400" onClick={()=>{navigate('/coffees')}}>View All Coffee in another page</button> 
            

            {/* but if we want to show all the coffees in one page, without moving to another, we will use this */}
            <button className="btn bg-yellow-400" onClick={()=>{setCoffees(data)}}>View All coffee in this page</button>
        </div>
        
    );
};

CoffeeCards.propTypes = {

};

export default CoffeeCards;