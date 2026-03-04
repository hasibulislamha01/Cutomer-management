import React, { use, useState } from 'react'
import Ticket from './Ticket'
import Summary from './Summary'

export default function Tickets({ fetchTickets }) {

    const tickets = use(fetchTickets)
    
    const [selected, setSelected] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [resolved, setResolved] = useState([])

    const handleSelect = (id) => {
        const isAlreadySelected = selected?.find(tid => tid === id)
        if (isAlreadySelected) {
            const item = selected?.filter(item => item !== id)
            setSelected(item)
        } else {
            setSelected(prev => [...prev, id])
        }
    }

    const handleInProgress = (id) => {
        const x = selected?.filter(sid => sid !== id)
        setSelected(x)
        setInProgress(prev => [...prev, id])
    }

    const handleResolve = (id) => {
        const x = inProgress?.filter(pid => pid !== id)
        setInProgress(x)
        setResolved(prev => [...prev, id])
    }

    const selectedTickets = tickets?.filter(ticket => selected?.includes(ticket?.id))
    const inProgressTickets = tickets?.filter(ticket => inProgress.includes(ticket?.id))
    console.log(tickets, selected, selectedTickets)
    return (
        <section >
            <Summary inProgress={inProgress?.length} resolved={resolved?.length} />
            <div className='flex gap-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        tickets?.map(ticket =>
                            <Ticket
                                key={ticket?.id}
                                ticket={ticket}
                                handleSelect={handleSelect}
                            />
                        )
                    }
                </div>
                <div className='space-y-10'>
                    <div className="card card-dash border-primary">
                        <div className="card-body">
                            <h2 className="card-title">Task Status {selectedTickets?.length}</h2>
                            <p className={`${selected?.length ? "hidden" : ""}`}>Select a cart to change status</p>
                            {
                                selectedTickets?.length ?
                                    selectedTickets?.map(ticket =>
                                        <div key={ticket?.id} className="card shadow-sm">
                                            <div className="card-body">
                                                <h2 className="card-title">{ticket?.title}</h2>

                                                <button className="btn btn-block btn-primary text-green-50"
                                                    onClick={() => handleInProgress(ticket?.id)}>
                                                    Continue</button>
                                            </div>
                                        </div>
                                    ) :
                                    <div className="card-body">
                                        <h2 className="">No tickets selected</h2>
                                    </div>
                            }
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>

                    <div className="card card-dash border-success">
                        <div className="card-body">
                            <h2 className="card-title">Resolve Task {inProgressTickets?.length}</h2>
                            <p className={`${inProgressTickets?.length ? "hidden" : ""}`}>Resolve a task</p>
                            {
                                inProgressTickets?.map(ticket =>
                                    <div key={ticket?.id} className="card shadow-sm">
                                        <div className="card-body">
                                            <h2 className="card-title">{ticket?.title}</h2>

                                            <button onClick={() => handleResolve(ticket?.id)} className="btn btn-block btn-success text-green-50">Complete</button>
                                        </div>
                                    </div>
                                )
                            }
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
