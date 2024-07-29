import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./photoSlider.css"

import photo1 from "../images/фото_1.jpg";
import photo2 from "../images/фото_2.jpg";
import photo3 from "../images/фото_3.jpg";
import photo4 from "../images/фото_4.jpg";
import photo5 from "../images/фото_5.jpg";



export default function PhotoSlider() {
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
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section class="photos" id="photos">
            <div class="container">
                <h2 class="section_title">Фотографии</h2>
                <Slider {...settings}>
                    <img src={photo1} alt="" class="photo"></img>
                    <img src={photo2} alt="" class="photo"></img>
                    <img src={photo3} alt="" class="photo"></img>
                    <img src={photo4} alt="" class="photo"></img>
                    <img src={photo5} alt="" class="photo"></img>
                </Slider>
            </div>
        </section>
    );
}