import React from 'react';

import { ToastContainer, toast } from 'react-toastify';



const ButtonAlart = ({ btnText, aletText, type }) => {
    const handleAlert = () => {
        if (type === "success") {
            toast.success(`${aletText}`);
        } else if (type === "info") {
            toast.info(`${aletText}`)
        }
        else {
            toast(`${aletText}`);
        }

    }

    return (
        <div>
            <button onClick={handleAlert}>{btnText}</button>
            <ToastContainer
                position='top-center'
                autoClose={3000}

            />
        </div>
    );
};

export default ButtonAlart;