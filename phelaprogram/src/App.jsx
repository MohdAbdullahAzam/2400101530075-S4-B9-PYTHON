import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function abc() {
    alert("function Called");
  }

  function apple() {
    alert("you have click on apple button");
  }

  function banana() {
    alert("you have click on banana button");
  }

  return (
    <div>
      <h1>Welcome to new project</h1>
      
      <button onClick={abc}>click</button>
      <button onClick={apple}>Apple</button>
      <button onClick={banana}>Banana</button>
    </div>
  );
}

export default App;