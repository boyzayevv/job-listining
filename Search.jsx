import React, { useState } from 'react';
import '../App.css';
import Job from './Job';

export default function Search() {
    const filterButtons = [
        { id: 1, name: "Frontend" },
        { id: 2, name: "Backend" },
        { id: 3, name: "Devops" }
    ];
    const [buttons, setButtons] = useState(filterButtons);

    const handleRemove = (id) => {
        const newButtons = buttons.filter((button) => button.id !== id);
        setButtons(newButtons);
    };

    const handleClear = () => {
        setButtons([]);
    };

    return (
        <div style={{ background: "#f0fafb", minHeight: "100vh" }}>
            <header className='w-100' style={{ background: "#61a8a3" }}>
                <img className='w-100' src="/bg-header-desktop.svg" alt="Header" />
            </header>
            <div className="container my-4 px-5">
                {buttons.length > 0 && (
                    <div className=''>
                        <div className="bg-white shadow p-3 d-flex justify-content-between align-items-center">
                            <div className="filter-btns d-flex gap-3 flex-wrap">
                                {buttons.map((button) => (
                                    <div key={button.id} className="d-flex justify-content-between align-items-center">
                                        <div className="">
                                            <button className='btn'>{button.name}</button>
                                            <button className='close btn' onClick={() => handleRemove(button.id)}>
                                                <i className='fa-solid fa-xmark'></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="">
                                <button onClick={handleClear} style={{ border: "none", background: "none" }} className='fw-bold text-secondary fs-4'>clear</button>
                            </div>
                        </div>
                    </div>
                )}
                <Job />
            </div>
        </div>
    );
}
