import './App.css';
import Footer from './container/footer/Footer';
import Main from './container/main/Main';
import Navbar from './container/navbar/Navbar';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Main />
      </div >
      <Footer />
    </>
  );
}

export default App;
