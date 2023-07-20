import { Link, Navigate } from "react-router-dom";

import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { useAppContext } from "../context/appContext";
import React from "react";

const LandingPage = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              maiores in quod, sunt harum error earum, dignissimos tempora
              tenetur perspiciatis voluptatem ad dolorem architecto, ducimus
              aut! Neque nostrum reiciendis provident!
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default LandingPage;
