import './App.css'
import Card1 from './components/Card1'
import About from './components/About'
import Card2 from './components/Card2'
import Navbar from './components/Navbar'
import Card from './components/Card'
import steven from "./assets/stevenimg.jpg"
import david from "./assets/David.jpg"

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
      <h1>Profile App</h1>
      <div className='section'>
        <div className='container'>
          <About />
        </div>
      </div>
      <div className='section'>
        <div className='container1'>
          
          <Card1 />
        </div>
      </div>
      <div className='section'>
        <div className='container2'>
          <Card2 />
        </div>
      </div>
    </main>
    </>
  );
};

export default App;
