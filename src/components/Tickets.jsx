import React, { use, useState } from 'react'
import Ticket from './Ticket'
import Summary from './Summary'
import ButtonAlart from './utilities/Alert'
import { toast, ToastContainer } from 'react-toastify'

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
        try {
            setSelected(x)
            setInProgress(prev => [...prev, id])
            toast.success("Task in progress")
        } catch (error) {
            toast.error("Failed to progress")
            console.log(error)
        }
    }

    const handleResolve = (id) => {
        const x = inProgress?.filter(pid => pid !== id)
        try {
            setInProgress(x)
            setResolved(prev => [...prev, id])
            toast.success(" Task Resolved ")
        } catch (error) {
            console.log(error)
            toast.error("Failed to Resolve task")
        }
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
                                selected={selected}
                                handleSelect={handleSelect}
                            />
                        )
                    }
                </div>
                <div className='space-y-10 w-96'>
                    <ToastContainer
                        position='top-center'
                        autoClose={3000}

                    />
                    <div className="card card-dash border-primary">
                        <div className="card-body">
                            <h2 className="card-title">Task Status {selectedTickets?.length}</h2>
                            <p className={`${selected?.length ? "hidden" : ""}`}>Select a cart to change status</p>
                            {
                                selectedTickets?.length ?
                                    selectedTickets?.map(ticket =>
                                        <div key={ticket?.id} className="card shadow-sm">
                                            <div className="card-body">
                                                <h2 className="text-lg font-medium">{ticket?.title}</h2>

                                                <div className="btn btn-block btn-primary text-green-50"
                                                    onClick={() => handleInProgress(ticket?.id)}>
                                                    Continue
                                                </div>

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
