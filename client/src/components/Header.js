import React, {useState, useEffect} from 'react'
import '../css/Header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import axios from 'axios'

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
  }
`;

const Header = () => {
    const [randomDrinks, setRandomDrinks] = useState([])

    useEffect(()=>{
        searchForRandomDrinks()
    },[])


    const renderSlides = () => {
    return randomDrinks.map(drink => (
      <div className="drinkPic">
        <img src={drink.strDrinkThumb} className="drinkPic"></img>
      </div>
    ));
    }
    const searchForRandomDrinks = () => {
        axios.get("http://localhost:8080/test").then((response)=>{
            setRandomDrinks(response.data.drinks)
        })
      }

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 3000
      };
    return (
        <>
        <div id='header'>
            <h1 id="title">Bartender</h1>
            <div id="carouselContainer">
                <div className="carousel">
                    <Slider {...settings}>{renderSlides()}</Slider>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header
