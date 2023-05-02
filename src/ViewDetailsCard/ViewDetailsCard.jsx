import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllSingleRecepies from '../AllSingleRecepies/AllSingleRecepies';

const ViewDetailsCard = () => {
    const allFetchedData = useLoaderData();
      console.log(allFetchedData.recipes);
    return (
        <div>
           {allFetchedData.recipes.map(each=> <AllSingleRecepies key={each.recipe_name} each={each}/>)}
        </div>
    );
};

export default ViewDetailsCard;