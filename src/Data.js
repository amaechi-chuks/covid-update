import React from "react";
import { useFetch } from "./hooks";
import SimpleCards from "./Card";
import "./data.css";

function Data() {
  const [data, loading] = useFetch(
    "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true."
  );
  const listOfCOVID = data.map((item) => (
    <SimpleCards
      key={item.id}
      country={item.country}
      infected={item.infected}
      deceased={item.deceased}
      lastUpdatedSource={item.lastUpdatedSource}
    />
  ));
  return (
    <div>
      <h2>Global COVID-19 Realtime Update</h2>
      <div className="main-container">
        {loading ? (
          <p className="loading">Loading......</p>
        ) : (
          <div>{listOfCOVID}</div>
        )}
      </div>
    </div>
  );
}
export default Data;
