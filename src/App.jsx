
// import  MyCards  from "./components/MyCards"; default import

// named import
import { MyCards } from "./components/MyCards"; 
import NetflixSeries from "./components/NetflixSeries";
import "./components/Netflix.css";
import { EventHandler } from "./components/EventHandler";
import { State } from "./components/hooks/State"; 
import { LiftingSateup} from "./components/hooks/liftingStateup";
import {ToggleSwitch} from "./components/projects/ToggleSwitch/ToggleSwitch";
import { SignupForm } from "./components/projects/RegistrationForm/RegistrationForm";
import {Todo} from "./components/projects/todo/Todo";
import {AuthPage} from "./components/projects/RegistrationForm/LoginForm";
export const App = () => {
  return (
  <section>
  {/* <div>
    <img src = "my pic.jfif" alt="my pic" width= "20%" height= "20%" />
  </div>
  <h2> Name : Jhangir Mughal </h2>
  <h3>Rating: 8.2</h3>
  <p>Summary: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ex officia perferendis fugit eaque veritatis incidunt temporibus, esse error non!</p> */}

{/* <MyCards/ >

<MyCards/>

<MyCards/> */}

<AuthPage/>
{/* <h1 className="card-heading">List of best Netflixseries</h1> */}
{/* <NetflixSeries/>; */}
{/* <State/> */}
{/* <LiftingSateup /> */}
{/* <Todo/> */}

{/* <SignupForm/> */}
{/* <ToggleSwitch/> */}
{/* //<EventHandler/>; */}
  </section>

  
  );
};


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

