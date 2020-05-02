import React from "react";
import { useFetch } from "../Helper/hooks";
import SimpleCards from "../Cards/Card";
import Loader from '../LoadingBar/Loadng';
import '../LoadingBar/LoadingBar.css'
import "./data.css";

function Data() {
  const [data, loading] = useFetch(
    "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true."
  );
  console.log(data.tested, 'tested');
  const listOfCOVID = data.map((item) => (
    <SimpleCards
      key={item.id}
      country={item.country}
      infected={item.infected}
      tested={item.tested}
      recovered={item.recovered}
      deceased={item.deceased}
      lastUpdatedSource={item.lastUpdatedSource}
    />
  ));
  return (
    <div>
      <h2>COVID-19 Update</h2>
      <div className="main-container">
        {loading ? (
          <div className="spinner">
          <Loader />
          </div>
        ) : (
          <div>{listOfCOVID}</div>
        )}
      </div>
    </div>
  );
}
export default Data;
