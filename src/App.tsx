import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputComponent } from './components/input/inputComponent';
import { DateComponent, MultiplyComponent, PowComponent } from './components';

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState<number | null>(null);
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
      <h1>Vite + React</h1>

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-8'>
          <InputComponent onValueChange={setValue}/>
          </div>
        </div>
      </div>
      
      <div className='d-flex justify-content-aroundcontainer'>
          <div className='col-4'>
          <DateComponent timeStamp={value}/>
          </div>
          <div className='col-4'>
          <MultiplyComponent value={value}/>
          </div>
          <div className='col-4'>
          <PowComponent value={value}/>
          </div>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
