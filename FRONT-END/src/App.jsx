import { SignUpComponent } from './Components/Sign-up'
import { LogInComponent } from './Components/Log-in'

import './App.css'

function App() {
  return (
    <div className='app'>
      <div className='row'>
        <LogInComponent />
        <SignUpComponent />
      </div>
    </div>
  )
}

export default App
