import Lottie from "lottie-react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import imagePlaceholder from "../assets/images/image.json";
const DetailsSkeleton = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-7 align-content-center p-1">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {Array.from({ length: 10 }).map(() => {
                  return <Skeleton count={1} />;
                })}
              </div>
              <div className="col-3">
                <Lottie
                  className="w-100"
                  animationData={imagePlaceholder}
                  loop={true}
                />
              </div>
              <div className="col-3">
                <Lottie
                  className="w-100"
                  animationData={imagePlaceholder}
                  loop={true}
                />
              </div>
              <div className="col-3">
                <Lottie
                  className="w-100"
                  animationData={imagePlaceholder}
                  loop={true}
                />
              </div>
              <div className="col-3">
                <Lottie
                  className="w-100"
                  animationData={imagePlaceholder}
                  loop={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 p-1">
          {Array.from({ length: 16 }).map(() => {
            return <Skeleton count={1} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;