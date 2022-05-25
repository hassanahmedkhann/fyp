import React, { useEffect, useState } from "react";
import "./Campaign.css"
import ClusterCard from "./ClusterCard";
import customer1 from "../../Images/customer1.jpg"
import customer2 from "../../Images/customer2.jpg"
import customer3 from "../../Images/customer3.jpg"
import customer4 from "../../Images/customer4.jpg"
import { getRequest } from "../../Api-Interaction/api-Interaction";
import Notification from "../../Utils/Notification";
import Loader from "../../Utils/Loader";

const Campaign = () => {

  const [clusterData, setClusterData] = useState()
  const [alert, setAlert] = useState({
    flag: false,
    status: 1,
    message: ""
  });
  const [open, setOpen] = useState(false)



  useEffect(async () => {

    try {

      const essentials = {
        endPoint: '/clusters/list',
      }
      setOpen(true)
      let resultHandle = await getRequest(essentials);
      if (resultHandle?.success === true) {
        console.log(resultHandle?.message)
        setClusterData(resultHandle?.message)
        setOpen(false);

      }
      else {
        setAlert({ flag: true, 'status': 2, message: resultHandle?.data.Error });
        setOpen(false)

      }

    }
    catch (err) {
      setOpen(false)
      console.log("Error! ", err)
    }

  }, [])

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
          {clusterData?.map((clusterData, index) => (
            <div key={index} className="col p-0 d-flex justify-content-center">
              <ClusterCard clusterData={clusterData} index={index + 1}  />
              <Notification setAlert={setAlert} alert={alert}/>
              <Loader open={open}/>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
};

export default Campaign;
