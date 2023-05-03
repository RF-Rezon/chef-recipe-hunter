import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSingleRecepies from '../AllSingleRecepies/AllSingleRecepies';
import ChefBanner from '../ChefBanner/ChefBanner';

const ViewDetailsCard = () => {

    const allFetchedData = useLoaderData();

    return (
        <div>
            <div><ChefBanner chefinfo={allFetchedData}/></div>
           <div>{allFetchedData.recipes.map(each=> <AllSingleRecepies key={each.recipe_name} each={each}/>)}</div>
        </div>
    );
};

export default ViewDetailsCard;