// Header.jsx
import React, { useState } from 'react';

const btn = [
    {
        name: "All",
        type: "all",
    },
    {
        name: "Breakfast",
        type: "breakfast",
    },
    {
        name: "Lunch",
        type: "lunch",
    },
    {
        name: "Dinner",
        type: "dinner",
    }
];

function Header({ setSearch }) {
    const [select, setSelect] = useState();

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="w-full bg-[#323334] pb-5">
            <div className='flex justify-between p-10'>
                <img src="/Foody Zone.png" alt="" />
                <input
                    className='border-red-500 border-[2px] bg-transparent text-white p-1 rounded-md outline-none'
                    type="text"
                    placeholder='Search'
                    onChange={handleSearchChange}
                />
            </div>
            <div className='flex justify-center text-white gap-2'>
                {btn.map((value, ind) => {
                    return (
                        <button
                            onClick={() => {
                                setSelect(value);
                            }}
                            className={`bg-[#FF4343] px-5 py-1 rounded-sm ${select === value ? 'bg-red-700 text-white' : ''}`}
                            key={value.name}
                        >
                            {value.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default Header;
