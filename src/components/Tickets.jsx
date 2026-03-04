import React, { use } from 'react'

export default function Tickets({ fetchTickets }) {
    // const [tickets, setTickets] = useState([])
    const tickets = use(fetchTickets)
    console.log(tickets)
    return (
        <section>

        </section>
    )
}
