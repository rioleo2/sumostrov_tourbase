export default function On_map() {
    const styles = {
        height: "60vh"
    };
    return (
        <section class="on_map" id="on_map">
            <div class="container">
                <h2 class="section_title">Мы на картах</h2>
                <div style={{height: styles.height}}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=32.862430%2C62.288874&mode=routes&rtext=59.938784%2C30.314997~63.982557%2C35.222691&rtt=auto&ruri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5MxIr0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsyIKDR2F8kEVUcFvQg%2C%2C~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzEyNzE4MxKSAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQsNGA0LXQu9C40Y8sINCR0LXQu9C-0LzQvtGA0YHQutC40Lkg0LzRg9C90LjRhtC40L_QsNC70YzQvdGL0Lkg0L7QutGA0YPQsywg0LTQtdGA0LXQstC90Y8g0KHRg9C80L7RgdGC0YDQvtCyIgoNCeQMQhUk7n9C&z=6.92"
                        width="100%" height="100%" frameborder="0" allowfullscreen="true">
                    </iframe></div>
            </div>
        </section>
    )
}