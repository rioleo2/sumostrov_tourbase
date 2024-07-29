import "./header.css"

export default function Header() {

    return (
        <header class="header">
        <ul class="nav-list">
          <li class="nav-list__item"><a href="#history">История</a></li>
          <li class="nav-list__item"><a href="#variants">Варианты домов</a></li>
          <li class="nav-list__item"><a href="#photos">Фотографии</a></li>
          <li class="nav-list__item"><a href="#reviews">Отзывы</a></li>
          <li class="nav-list__item"><a href="#on_map">Мы на карте</a></li>
          <li class="nav-list__item"><a href="#contacts">Контакты</a></li>
        </ul>
      </header>
    )
}