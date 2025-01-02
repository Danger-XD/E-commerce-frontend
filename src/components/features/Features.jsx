import React from "react";
import FeaturesStore from "../../store/FeaturesStore.js";
import FeaturesSkeleton from "./../../skeletons/FeaturesSkeleton.jsx";
import testImage from "../../assets/images/placing.jpg";

const Features = () => {
  const { FeaturesList } = FeaturesStore();
  if (FeaturesList === null) {
    return <FeaturesSkeleton />;
  } else {
    return (
      <div className="container section">
        <div className="row">
          {FeaturesList.map((item, index) => {
            return (
              <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-3">
                        <img className="w-100" src={testImage} />
                      </div>
                      <div className="col-9">
                        <h3 className="bodyXLarge">{item["name"]}</h3>
                        <span className="bodySmal">{item["description"]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Features;
