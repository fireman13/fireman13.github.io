import siteInfo from './config/siteInfo';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Classes from './components/Classes';
import Registration from './components/Registration';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App" aria-label={`${siteInfo.name} Application`}>
      <Header />
      <main>
        <Home />
        <Gallery />
        <Classes />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
