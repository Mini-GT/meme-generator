import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import App from './challenges/outputRandomURL/App'
// import App from './challenges/addThingToTheArray/App'
// import App from './challenges/statePractice/App'
// import App from './challenges/flippingStateBackAndForth/App'
// import App from './challenges/complexState/App'
// import App from './challenges/passingStateAsProps/App'
import App from './challenges/boxesChallenge/App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
