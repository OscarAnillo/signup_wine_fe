import { useState } from 'react';
import { SignUpComponent } from './Components/Sign-up'
import { LogInComponent } from './Components/Log-in'

import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className='app'>
      {submitted ? <h1>This is the UI</h1> : 
        <div className='row'>
          <LogInComponent setSubmitted={setSubmitted} />
          <SignUpComponent />
        </div>
      }
    </div>
  )
}

export default App
