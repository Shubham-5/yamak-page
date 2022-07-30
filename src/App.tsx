import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <div className='px-5 pt-3'>
        <Cards />
      </div>
    </div>
  );
}

export default App;
