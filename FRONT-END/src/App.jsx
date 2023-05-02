import { useState } from 'react';
import { SignUpComponent } from './Components/Sign-up'
import { LogInComponent } from './Components/Log-in'
import { UIComponent } from './Components/UI-components';

import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <div className='app'>
      {submitted ? <UIComponent /> : 
        <div className='row'>
          <LogInComponent setSubmitted={setSubmitted} />
          <SignUpComponent />
        </div>
      }
    </div>
  )
}

export default App
