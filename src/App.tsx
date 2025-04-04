
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputComponent } from './components/input/inputComponent';
import { DateComponent, MultiplyComponent, PowComponent } from './components';

function App() {

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
          <InputComponent />
          </div>
        </div>
      </div>
      
      <div className='d-flex justify-content-aroundcontainer'>
          <div className='col-4'>
          <DateComponent />
          </div>
          <div className='col-4'>
          <MultiplyComponent />
          </div>
          <div className='col-4'>
          <PowComponent/>
          </div>
      </div>
    </>
  )
}

export default App
