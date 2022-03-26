import React from "react";
import "./Campaign.css"
import ClusterCard from "./ClusterCard";
import customer1 from "../../Images/customer1.jpg"
import customer2 from "../../Images/customer2.jpg"
import customer3 from "../../Images/customer3.jpg"
import customer4 from "../../Images/customer4.jpg"

const Campaign = () => {

  const clusterArray = [
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,
    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },
    {
      total: 478,
      startRange: '10,000',
      endRange: '12,500',
      customer1: customer1,
      customer2: customer2,
      customer3: customer3,
      customer4: customer4,

    },

  ]
  return (
    <div>
      <div className="campaign container-fluid">
        <h3 className="text-center my-4 ">CLUSTER ANALYSIS</h3>
        <div className="row row-cols-lg-3 row-cols-xl-4 row-cols-md-2 ">
          {clusterArray.map((clusterData, index) => (
            <div className="col p-0 d-flex justify-content-center">
              <ClusterCard clusterData={clusterData} index={index + 1} key={index} />
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
};

export default Campaign;
