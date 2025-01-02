import React from "react";
import LegalSkeleton from "../../skeletons/LegalSkeleton.jsx";
import FeaturesStore from "../../store/FeaturesStore.js";
import parse from "html-react-parser";

const LegalContents = () => {
  const { LegalList } = FeaturesStore();
  if (LegalList === null) {
    <LegalSkeleton />;
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4">{parse(LegalList[0]["description"])}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default LegalContents;
