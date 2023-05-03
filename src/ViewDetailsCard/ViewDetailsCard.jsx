import React from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import ErrorPage from "../Layouts/404Page";
import Spninner from "../Utils/spninner";
import AllSingleRecepies from "./../AllSingleRecepies/AllSingleRecepies";
import ChefBanner from "./../ChefBanner/ChefBanner";

const ViewDetailsCard = () => {
  const navigation =  useNavigation;
  const allFetchedData = useLoaderData();
  const {id} = useParams();
  return (
    <div>
      <div>
        {navigation.state === "loading" && <Spninner/>}
      </div>
      <div>
       { allFetchedData && < ChefBanner chefinfo={allFetchedData} />}
      </div>
      <div>{(id >=1 && id <= 10) ? allFetchedData?.recipes?.map((each) => <AllSingleRecepies key={each.recipe_name} each={each} />) : <ErrorPage/>}</div>
    </div>
  );
};

export default ViewDetailsCard;

//<Navigate to="/" replace={true} />
