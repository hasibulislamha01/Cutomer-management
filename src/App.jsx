
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Tickets from './components/Tickets'

const fetchTickets = fetch("/public/tickets.json").then(res => res.json())

function App() {



  return (
    <div className='border border-red-300'>
      <Navbar />
      <h1>Vite + React</h1>

      <p>
        Click on the Vite and React logos to learn more
      </p>
      <Suspense>
        <Tickets fetchTickets={fetchTickets} />
      </Suspense>
    </div>
  )
}

export default App
