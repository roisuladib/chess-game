import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Chessboard } from './components'

function App() {
   return (
      <>
         <h1>Chess Game</h1>
         <Chessboard />

         <div style={{ marginTop: 300 }}>
            <a href="https://vitejs.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
      </>
  )
}

export default App
