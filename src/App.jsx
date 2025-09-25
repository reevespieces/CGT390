import './App.css'
import Card1 from './components/Card1'
import About from './components/About'
import Card2 from './components/Card2'
import Navbar from './components/Navbar'
import Card from './components/Card'
import steven from "./assets/stevenimg.jpg"
import david from "./assets/David.jpg"
import Wrapper from './components/Wrapper'

function App() {
  const profiles = [
    {name: "Steven Bridges", title: "Web Developer", img: steven},
    {name: "David Moore", title: "UX Designer", img: david}
  ]

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
      <h1>Profile App</h1>
        </Wrapper>
      <div className='section' id='about'>
        <div className='container'>
          <About />
        </div>
      </div>
      <div className='section' id="profiles">
        <div className='container'>
          <div className='flex-container'>
            {
              profiles.map((profile, index) => (
                <Card key={index} name={profile.name} title={profile.title} img={profile.img} />
              ))
            }
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default App;
