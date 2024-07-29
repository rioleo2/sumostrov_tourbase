import './App.css';
import Header from './components/header';
import HistorySection from './components/historySection';
import HouseCards from './components/houseCards';
import PhotoSlider from './components/photoSlider';
import Reviews from './components/reviews';
import On_map from './components/onMap';
import ContactsSection from './components/contactsSection';

function App() {
  return (
    <body>
      <main class="main">
        <div class="container">
          <Header></Header>
          <h1 class="main_title">
            Туристическая база <br></br>
            “Сумостров”
          </h1>
          <h2 class="sub_title">Начните своё путешествие по удивительному краю России</h2>
        </div>
      </main>
      <HistorySection></HistorySection>
      <HouseCards></HouseCards>
      <PhotoSlider></PhotoSlider>
      <Reviews></Reviews>
      <On_map></On_map>
      <ContactsSection></ContactsSection>

    </body>
  );
}

export default App;
