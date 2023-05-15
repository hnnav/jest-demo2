import './App.css';
import { useState } from 'react'
import Input from './components/Input.js'
import Button from './components/Button.js'

function App() {

  const [showDiv, setShowDiv] = useState(true)

  return (
    <div className="App">
      <Input showDiv={showDiv}/>
      <Button />
    </div>
  );
}

export default App;
