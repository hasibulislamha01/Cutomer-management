import React from 'react'
import DateFormatter from './utilities/DateFormatter'

export default function Ticket({ ticket, handleSelect }) {


    return (
        <div className="card shadow-sm" onClick={() => handleSelect(ticket?.id)}>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <h2 className="card-title">{ticket?.title}</h2>
                    <div className={`px-3 py-1 rounded-full 
                        ${ticket?.status === "Open" ? "bg-green-200 text-green-700" : ticket?.status === "In Progress" ? "bg-amber-200 text-amber-700" : "bg-red-100 text-red-500"}
                        `}>{ticket?.status}</div>
                </div>
                <p className='text-gray-500'>{ticket?.description}</p>
                <div className="card-actions">
                    <h5 className={`uppercase font-medium 
                        ${ticket?.priority === "Low" ? "text-green-600" :
                            ticket?.priority === "High" ? "text-red-600" : "text-amber-500"}
                        `}>{ticket?.priority}</h5>
                    <h5>{ticket?.customer}</h5>
                    <DateFormatter unformattedDate={ticket.createdAt} />
                </div>
            </div>
        </div>
    )
}
