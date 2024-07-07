import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import PickMeals from "../Assets/pick-meals-image.png"; // Import the correct images
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum.",
        },
    ];

    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            {/* <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="" />
            </div> */}
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <p className="primary-text">
                    Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Video
                    </button>
                </div>
            </div>
            
            {/* Work section */}
            <div className="work-section-wrapper">
                <div className="work-section-top">
                    <p className="primary-subheading">Work</p>
                    <h1 className="primary-heading">How It Works</h1>
                    <p className="primary-text">
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                    </p>
                </div>
                <div className="work-section-bottom">
                    {workInfoData.map((data) => (
                        <div className="work-section-info" key={data.title}>
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt={data.title} />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
