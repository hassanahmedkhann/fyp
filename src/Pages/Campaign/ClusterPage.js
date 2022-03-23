import React from "react";
import "./Campaign.css"
const ClusterPage = () => {


const customerNames = [
   "Hassan Ahmed Khan", "Furqan Umer Ali", "Asmar Hassan Khan", "Murtuza Kazmi","Sufian Ali Khan", "Hassan Ahmed Khan", "Furqan Umer Ali", "Asmar Hassan Khan", "Murtuza Kazmi","Sufian Ali Khan", "Hassan Ahmed Khan", "Furqan Umer Ali", "Asmar Hassan Khan", "Murtuza Kazmi","Sufian Ali Khan", "Hassan Ahmed Khan", "Furqan Umer Ali", "Asmar Hassan Khan", "Murtuza Kazmi","Sufian Ali Khan", "Hassan Ahmed Khan", "Furqan Umer Ali", "Asmar Hassan Khan", "Murtuza Kazmi","Sufian Ali Khan"
]
  return <div className="cluster-page">
      <div className="m-4 cluster-page-card">
          <div className="d-flex">
        <div className="cluster-page-header my-3">
            <h1>Cluster No. 1</h1>
            <h3>Total Members: 478</h3>
            <h3>Cluster Accuracy: 87%</h3>
        </div>
        <div className="cluster-customer-list">
            <h3>Customers</h3>
            <div className="customer-list">
            {customerNames.map((name)=> (
                <h5 className="my-3 p-3 customer-name">{name}</h5>
            ))}
            </div>
        </div>
        </div>
        <div className="cluster-page-buttons">
            <button className="btn-1 my-3 mx-2">Eliminate Cluster</button>
            <button className="btn-2 my-3 mx-2">Start Email Campaign</button>
        </div>
      </div>
  </div>;
};

export default ClusterPage;
