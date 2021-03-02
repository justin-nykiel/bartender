import React, {useState} from 'react'
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


    const renderSlides = () => {
    return randomDrinks.map(drink => (
      <div className="drinkPic">
        <img src={drink.strDrinkThumb} className="drinkPic"></img>
      </div>
    ));
    }
    const searchForRandomDrinks = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/test").then((response)=>{
            console.log(response.data.drinks)
            setRandomDrinks(response.data.drinks)
            console.log(randomDrinks)
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
        <div className='header'>
            <h1>Bartender</h1>
        </div>
        <div className="carouselContainer">
            <div className="carousel">
                <Slider {...settings}>{renderSlides()}</Slider>
            </div>
        </div>
        <button onClick={searchForRandomDrinks}></button>
        </>
    )
}

export default Header
