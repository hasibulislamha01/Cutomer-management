import React from 'react';

const Summary = ({ inProgress, resolved }) => {
    return (
        <div className='py-10 flex items-center gap-10 font-semibold'>
            <div className=" card bg-linear-to-r from-[#632EE3] to-[#9F62F2] image-full shadow-sm">
                <figure className='flex items-center'>
                    <img
                        src="/public/vector1.png"
                        alt="vector" 
                        className='flex-1 '
                        />
                    <img
                        src="/public/vector1.png"
                        alt="vector" 
                        className='flex-1 rotate-180'
                        />
                </figure>
                <div className="card-body flex flex-col items-center justify-center gap-6">
                    <h2 className="text-3xl">In Progress</h2>
                    <h3 className='text-5xl font-bold'>{inProgress}</h3>
                </div>
            </div>
            <div className=" card bg-linear-to-r from-[#54CF68] to-[#00827A] image-full shadow-sm">
                <figure className='flex items-center'>
                    <img
                        src="/public/vector1.png"
                        alt="vector" 
                        className='flex-1 '
                        />
                    <img
                        src="/public/vector1.png"
                        alt="vector" 
                        className='flex-1 rotate-180'
                        />
                </figure>
                <div className="card-body flex flex-col items-center justify-center gap-6">
                    <h2 className="card-title text-3xl">Resolved</h2>
                    <h3 className='text-5xl font-bold'>{resolved}</h3>
                </div>
            </div>
        </div>
    );
};

export default Summary;