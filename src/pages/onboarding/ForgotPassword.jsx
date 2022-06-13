import "../../styles/onboarding.css";
import Video1 from "../../assets/videos/vid1.mp4";
import Video2 from "../../assets/videos/vid2.mp4";
import Video3 from "../../assets/videos/vid3.mp4";
import Logosty1 from "../../components/logosty1";

import { Carousel, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Popup from "./Popup";
import Otp from "./Otp";

const ForgotPassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) setIndex(2);
  };
  const onNextClick = () => {
    if (index === 2) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);
  };

  return (
    <>
      <section className="onboarding">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-7 g-0">
              <header className="position-relative">
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
                        <div className="d-flex min-vh-100  align-items-end">
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
                        <div className="d-flex min-vh-100  align-items-end">
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
              </header>
            </div>

            <div className="col-lg-5 py-5 py-lg-0 d-flex flex-column align-items-center justify-content-center position-relative">
              <div className="display-7 f-play-fair mb-5 pb-5 ">
                Forgot Password
              </div>

              <form className="form-sign-up ">
                <div>
                  <input
                    className="inputText"
                    placeholder="Enter Your Mobile no. or Email"
                  />
                </div>
                <div className=" fw-light txt-14 ">
                  {" "}
                  Please enter your email address or register your mobile number{" "}
                  <br />
                  to receive an OTP code
                </div>
                <Button
                  variant=""
                  className="shadow-orange fw-bold btn rounded-pill btn-orange p-3 mt-5 w-100"
                  onClick={togglePopup}
                >
                  Get OTP
                </Button>
                <div className="pt-3 mb-5 text-center">
                  Remember password?{" "}
                  <NavLink end to="/login">
                    Login
                  </NavLink>
                </div>
              </form>

              {isOpen && (
                <Popup
                  content={
                    <>
                      <div className="otp m-4">
                        <div className="display f-play-fair ">Confirm OTP</div>
                        <div className="py-5 mb-3">
                          <Otp />
                          <label className="txt-label-sm pt-3 w-100 text-center fw-light">
                            Please enter the OTP we sent to your Mobile number /
                            Email address{" "}
                          </label>
                        </div>

                        <Link to="/" className="link-orange fw-bold">
                          Resent Code
                        </Link>
                        <Link to="/">
                          <Button
                            variant=""
                            className="mt-3 shadow-orange fw-bold btn rounded-pill btn-orange py-3  w-100"
                          >
                            Get OTP
                          </Button>
                        </Link>
                      </div>
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}

              <div>Privacy matters to us. Learn how.</div>
              <div className="text-center">
                {" "}
                By signing up you agree to receive promotional text messages{" "}
                <br /> and to our terms and conditions.
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
