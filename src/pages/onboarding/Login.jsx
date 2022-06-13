import "../../styles/onboarding.css";
import Video1 from "../../assets/videos/vid1.mp4";
import Video2 from "../../assets/videos/vid2.mp4";
import Video3 from "../../assets/videos/vid3.mp4";
import Logosty1 from "../../components/logosty1";

import { Carousel, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLoginButton from "../../components/GooleLoginButton";

import axios from "axios";
import LoginLogo from "../../components/LoginLogo";
import EyeIcon from "../../components/EyeIcon";

const Login = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const responseFacebook = (response) => {
    axios
      .post("http://localhost:8000/api/users/auth/facebook", {
        token: response.accessToken,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(response);
  };
  const componentClicked = (data) => {
    console.warn(data);
  };

  return (
    <>
      <section className="onboarding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 g-0">
              <header className="position-relative">
                <Carousel
                  fade
                  activeIndex={index}
                  onSelect={handleSelect}
                  indicators={false}
                  controls={false}
                >
                  <Carousel.Item>
                    <video
                      className="max-w-none position-absolute top-50 start-50"
                      playsInline="ine"
                      autoPlay="autoplay"
                      muted="muted"
                      loop="loop"
                    >
                      <source src={Video1} type="video/mp4" />
                    </video>
                    <div className="container position-relative">
                      <div className="logosty1 px-5 position-absolute">
                        <Logosty1 />
                      </div>
                      <div className="d-flex min-vh-100 align-items-end">
                        <div className="w-100 text-white px-5 mb-5">
                          <h4 className="txt-18-36 fw-normal f-play-fair">
                            Welcome to <br /> the Vydl Platform
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <video
                      className="max-w-none position-absolute top-50 start-50"
                      playsInline="ine"
                      autoPlay="autoplay"
                      muted="muted"
                      loop="loop"
                    >
                      <source src={Video2} type="video/mp4" />
                    </video>
                    <div className="container position-relative">
                      <div className="logosty1 px-5 position-absolute">
                        <Logosty1 />
                      </div>
                      <div className="d-flex min-vh-100 align-items-end">
                        <div className="w-100 text-white px-5 mb-5">
                          <h4 className="txt-18-36 fw-normal f-play-fair">
                            Delight your patients <br /> with easy to access
                            virtual care
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>

                  <Carousel.Item>
                    <video
                      className="max-w-none position-absolute top-50 start-50"
                      playsInline="ine"
                      autoPlay="autoplay"
                      muted="muted"
                      loop="loop"
                    >
                      <source src={Video3} type="video/mp4" />
                    </video>
                    <div className="container position-relative">
                      <div className="logosty1 px-5 position-absolute">
                        <Logosty1 />
                      </div>
                      <div className="d-flex min-vh-100 align-items-end">
                        <div className="w-100 text-white px-5 mb-5">
                          <h4 className="txt-18-36 fw-normal f-play-fair">
                            Help your patient’s lifelong
                            <br /> intimate health journey.
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </header>
            </div>
            <div className="col-lg-5 py-5 py-lg-0 d-flex flex-column align-items-center justify-content-center">
              <div className="Login-head">
                <LoginLogo />
              </div>
              <form className="form-sign-up ">
                <div>
                  <input
                    className="inputText"
                    placeholder="Enter Your Email "
                  />
                </div>
                <div className="password-details">
                  <input
                    type="password"
                    className="inputText"
                    placeholder="Enter Your Password"
                  />
                  <span className="eye-details">
                    <EyeIcon />
                  </span>
                </div>
                <div className="forget-details">
                  <label className="remember-me">
                    <input type="checkbox" className="remember-me-input" />
                    <span className="remember-me-details">Remember me</span>
                  </label>
                  <NavLink to="/forgotpassword" className={"forgot-password"}>
                    Forgot Password?
                  </NavLink>
                </div>
                <Link to="/practitioner">
                  <Button
                    variant=""
                    className="login-btn btn-orange shadow-orange fw-bold btn rounded-pill p-3 mt-5 w-100"
                  >
                    Login
                  </Button>
                </Link>
                <div className="need-account">
                  Need an Account?{" "}
                  <NavLink end to="/signup">
                    Signup
                  </NavLink>
                </div>
              </form>
              <div className="login-with">
                <span className="login-with-details">or Login with </span>
              </div>
              <div className="federated-login">
                <GoogleLoginButton
                  className="federated-login-google"
                  buttonText={"google"}
                />
                <FacebookLogin
                  appId="441998523977767"
                  autoLoad={false}
                  fields="name,email,picture"
                  cssClass="federated-login-facebook shadow btn-icon-sm rounded-pill"
                  icon="fb-icon-sm"
                  textButton="facebook"
                  onClick={componentClicked}
                  callback={responseFacebook}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
