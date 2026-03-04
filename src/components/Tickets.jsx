import React, { use } from 'react'
import Ticket from './Ticket'

export default function Tickets({ fetchTickets }) {
    // const [tickets, setTickets] = useState([])
    const tickets = use(fetchTickets)
    console.log(tickets)
    return (
        <section className='flex gap-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    tickets?.map(ticket =>
                        <Ticket key={ticket?.id} ticket={ticket} />
                    )
                }
            </div>
            <div>
                {/* <div>
                    <h3>Task Status</h3>
                    <p className=''>Select a cart to change status</p>
                    <div></div>
                </div> */}

                <div className="card card-dash border-success">
                    <div className="card-body">
                        <h2 className="card-title">Task Status</h2>
                        <p className=''>Select a cart to change status</p>                        <div className="card-actions justify-end">
                        <button className="btn btn-block btn-success text-green-50">Complete</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Resolved Tasks</h3>
                    <p>No resolved tasks yet</p>
                </div>

            </div>
        </section>
    )
}
