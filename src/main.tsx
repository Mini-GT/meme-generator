import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import App from './challenges/outputRandomURL/App'
// import App from './challenges/addThingToTheArray/App'
// import App from './challenges/statePractice/App'
// import App from './challenges/flippingStateBackAndForth/App'
// import App from './challenges/complexState/App'
// import App from './challenges/passingStateAsProps/App'
// import App from './challenges/boxesChallenge/App'
// import Page from './challenges/conditionalRendering/Part 2/Page'
// import Form from './testing/components/Form'
// import FormInput from './challenges/formInput/part 3/FormInput'
// import Radio from './challenges/formInput/radio/Radio'
// import Select from './challenges/formInput/select and input/Select'
// import App from './challenges/formInput/final challenge/App'
import PageUseEffect from './challenges/useEffect/Page'
import './index.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   {/* <App darkMode={false} /> */}
  //   <App />
  // </StrictMode>,
  <PageUseEffect /> // not using strictmode cause it renders the component twice(not using this time for a reason)
)
