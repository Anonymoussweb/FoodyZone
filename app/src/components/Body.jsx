import React from 'react'
import { URL_ADD } from '../App'

function Body({ data }) {

    return (
        <div className='bg-[url(/bg.png)] gap-y-3 justify-center py-10 gap-4  mx-auto flex w-full flex-wrap mt-[-5px] bg-cover bg-center'>
            {
                data?.map((item, i) => {
                    return <div key={i}
                    className='flex text-white w-[348px] h-[167px] whitespace-break-spaces  bg-[#808080a2] rounded-lg '
                    >
                        <img className='object-contain' src={URL_ADD + item.image} alt="image" />
                        <div className='flex flex-col justify-center items-center' >
                            <p className='text-red-400'>{item.name}</p>
                            <p className='text-[13px]'> {item.text}</p>
                            <button className='bg-red-500 px-4 py-1 rounded-sm mt-5'>${item.price.toFixed(2)}/-</button>
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default Body