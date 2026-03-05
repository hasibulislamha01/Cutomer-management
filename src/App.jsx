
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Tickets from './components/Tickets'
import Footer from './components/shared/Footer'

const fetchTickets = fetch("/tickets.json").then(res => res.json())

function App() {



  return (
    <div >
      <Navbar />

      <div className='max-w-7xl mx-auto'>
        <Suspense>
          <Tickets fetchTickets={fetchTickets} />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App
