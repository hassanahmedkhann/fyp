import React, { useEffect, useState } from "react";
import video from "../../Videos/full.mp4";
import mapImage from "../../Pipeline Images/map.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import videoIcon from "../../Images/video.png";
import "../../Utils.css";
import mapIcon from "../../Images/map.png";
import img1 from "../../Pipeline Images/page-1.png";
import img2 from "../../Pipeline Images/page-2.png";
import img3 from "../../Pipeline Images/page-3.png";
import img4 from "../../Pipeline Images/page-4.png";
import img5 from "../../Pipeline Images/page-5.png";
import img6 from "../../Pipeline Images/page-6.png";
import arrowUpIcon from "../../Images/arrow.png";

// import { Player } from "video-react";
import "./Pipeline.css";
const Pipeline = () => {
  const [topDiv, setTopDiv] = useState();
  const [nextDiv, setNextDiv] = useState();
  const [scrollData, setScrollData] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollData(window.scrollY);
    });
  }, [scrollData]);

  useEffect(() => {
    setTopDiv(document.querySelector(".app"));
    setNextDiv(document.querySelector(".page-1"));
  }, []);

  const handleBackTop = (e) => {
    e.preventDefault();
    topDiv.scrollIntoView();
  };

  const handleLetsSee = (e) => {
    e.preventDefault();
    nextDiv.scrollIntoView();
  };

  return (
    <div className="pipeline">
      <p style={{ color: "#033A7D" }} className="text-center my-3">
        Get to know how ORIGIN8 Works.
      </p>
      <div className="container-fluid">
        <div className="row video-pipeline">
          <div className="col-12 upper-pipeline video-pipeline2">
            <div className="pipeline-text mb-3 w-100">
              <p className="h1 my-3 mx-4">Watch Our AV!</p>
              <img className="me-3" src={videoIcon} alt="video-icon" />
            </div>
            <video
              className="video-pipeline"
              width="max-content"
              height="500"
              controls
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="col-12 upper-pipeline upper-below my-4">
            <div className="pipeline-text mt-4 text-start">
              <p className="mx-4 my-3 w-100 text-start">Follow the ROADMAP!</p>
              <img className="me-3" alt="map-Icon" src={mapIcon} />
            </div>
            <div className="pipeline-map-img">
              <img src={mapImage} alt="map-image" />
              <p
                onClickCapture={handleLetsSee}
                className="btn-animated btn-animated-pop"
              >
                View Roadmap
              </p>
            </div>
          </div>
          <span
            onClick={handleBackTop}
            className={`col-12 back-top ${scrollData < 900 && "d-none"} `}
          >
            <svg
              id="Iconly_Bulk_Arrow_-_Right_Circle"
              data-name="Iconly/Bulk/Arrow - Right Circle"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <g
                id="Arrow_-_Right_Circle"
                data-name="Arrow - Right Circle"
                transform="translate(2 22) rotate(-90)"
              >
                <path
                  id="Fill_1"
                  data-name="Fill 1"
                  d="M20,10A10,10,0,1,1,10,0,10.011,10.011,0,0,1,20,10"
                  transform="translate(0 0)"
                  opacity="0.4"
                />
                <path
                  id="Fill_4"
                  data-name="Fill 4"
                  d="M8.443.749a.747.747,0,0,1-.219.529L4.754,4.765a.752.752,0,0,1-1.063,0L.219,1.278A.75.75,0,0,1,1.282.22l2.94,2.953L7.162.22A.75.75,0,0,1,8.443.749"
                  transform="translate(5.778 7.808)"
                />
              </g>
            </svg>
          </span>

          <div className="col-12 pipeline-pages page-1">
            <img src={img1} alt="page-1" />
          </div>
          <div className="col-12 pipeline-pages">
            <img src={img2} alt="pipeline-pages" />
          </div>
          <div className="col-12 pipeline-pages">
            <img src={img3} alt="pipeline-pages" />
          </div>
          <div className="col-12 pipeline-pages">
            <img src={img4} alt="pipeline-pages" />
          </div>
          <div className="col-12 pipeline-pages">
            <img src={img5} alt="pipeline-pages" />
          </div>
          <div className="col-12 pipeline-pages">
            <img src={img6} alt="pipeline-pages" />
          </div>
        </div>
      </div>

      {/* <Player playsInline poster={poster} src={video} /> */}
    </div>
  );
};

export default Pipeline;
