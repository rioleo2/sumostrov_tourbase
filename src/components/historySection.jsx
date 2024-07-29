import "./historySection.css";
import imageSumozero from "../images/сумозеро.jpg";
import imageSumostrov from "../images/сумостров.jpg";
import imageHouses from "../images/houses.jpg";

export default function HistorySection() {
    return (
        <div class="container">
        <section class="history" id="history">


                <div class="block block_1">
                    <p class="history_text">Турбаза расположена на острове Сумозеро, образованного разливом реки Сума.</p>
                    <img class="history_image" src={imageSumozero} ></img>
                </div>
                <div class="block">
                    <img class="history_image" src={imageSumostrov} width="512px" height="289px"></img>
                    <p class="history_text history_text_2">Данный остров - это самое нетронутое живописное место Карелии</p>
                </div>
                <div class="block">
                    <p class="history_text">На территории турбазы находятся, как отдельно стоящие 2-х и 3-х местные домики,
                        так и отдельные номера в гостевом доме, баня, летняя кухня, водный транспорт, снегоходы.</p>
                    <img class="history_image" src={imageHouses} width="528px" height="278px"></img>
                </div>

        </section>
        </div>
    )
}