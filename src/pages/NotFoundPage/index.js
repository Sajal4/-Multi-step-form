import React from "react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <>
      <div className="mobileTopBar"></div>
      <div className="mainContainer">
        <div className="desktopSideBar"></div>
        <div className="mainContent">
          <div className="notFoundPageContainer">
            <h1 className="stepHeader">Oops!,<br/> Page Not Found</h1>
            <p className="stepSubText">
              You can go back to the start of this form by clicking the button below.
            </p>

            <div className="notFoundPageBackButtonContainer">
              <Link to="/">
                <button className="notFoundPageBackButton">
                  Back to the start
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
