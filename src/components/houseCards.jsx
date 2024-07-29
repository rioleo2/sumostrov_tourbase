import React from "react";
import "./houseCards.css"
import { HOUSES } from "../const/houses"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function HouseCards() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <section class="houses_variants" id="variants">
            <div class="container">
                <h2 class="section_title">Варианты домов</h2>
                {/* <div class="houses_slider"> */}
                <Slider {...settings}>
                    {
                        HOUSES.map((el, i) =>
                            <div class="card">
                                <p class="card_title">{el.card_title}</p>
                                <img src={el.imageSource} alt="Дом_номер_один" class="card_image" width="409px"
                                    height="246px"></img>
                                <ul class="card_description">
                                    {el.descriptionItems.map((elem, j) =>
                                        <li className="card_description_item">{elem}</li>)}
                                </ul>
                            </div>
                        )
                    }
                </Slider>
                {/* </div> */}
            </div>
        </section>

    )
}