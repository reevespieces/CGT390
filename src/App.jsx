<<<<<<< HEAD
import './App.css'
import Card1 from './components/Card1'
import About from './components/About'
import Card2 from './components/Card2'
import Navbar from './components/Navbar'

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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My APP</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
>>>>>>> d88d10e9345b89df22b0720b82268ea64fbd6635

export default App
