import "./contactsSection.css"

export default function ContactsSection() {
    return (
        <section class="contacts" id="contacts">
            <div class="container">
                <h2 class="section_title">Контакты</h2>
                <div class="contacts_variants">
                    <ul class="telephone">
                        Телефон <br></br>
                        <li class="telephone_list"><a href="tel:+79214568353" class="telephone_number">+7(921) 456-83-53</a></li>
                        <li class="telephone_list"><a href="tel:+79251721621" class="telephone_number">+7(925) 172-16-21</a></li>
                        <li class="telephone_list"><a href="tel:+79253192806" class="telephone_number">+7(925) 319-28-06</a></li>
                    </ul>
                    <p class="contacts_adress">
                        Адрес <br></br>
                            Республика Карелия, Беломорский район, п.Хвойный, д.Сумостров
                    </p>
                    <a class="contacts_email" href="mailto:89214568353@mail.ru">
                        Почта <br></br>
                        89214568353@mail.ru
                    </a>
                </div>
                <p class="notification">Для бронирования проживания просим отправлять заявку с указанием: даты заезда, количества людей, ф.и.о. и обратным телефоном по электронной
                    почте или смс сообщением на один из номеров телефонов, указанных выше</p>
            </div>
        </section>
    )
}