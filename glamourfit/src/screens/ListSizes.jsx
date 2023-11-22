"use client"

import React from 'react'
import { useStateContext } from '../context/context'
import "../app/style/listSizes.css"
import Link from 'next/link'

const ListSizes = () => {

    const {
        coatData,
        vestcoatData,
        clothestData,
    } = useStateContext()

    return (
        <section className='sizesListContainer'>
            <Link className='backArrow' href="/"><p >Back</p></Link>
            <div className='coatListDiv'>
                <h4>Coat Sizes</h4>
                {coatData.map((item, index) => {
                    return (
                        <div className='listIndex' key={index}>
                            <p>Name: {item.name}</p>
                            <p>Hand: {item.hand}</p>
                            <p>Length: {item.length}</p>
                            <p>Chest: {item.chest}</p>
                            <p>Shoulder: {item.sholder}</p>
                        </div>

                    )
                })}
            </div>
            <div className='vestCoatListDiv'>
                <h4>VestCoat Sizes</h4>
                {vestcoatData.map((item, index) => {
                    return (
                        <div className='listIndex' key={index}>
                            <p>Name: {item.name}</p>
                            <p>Length: {item.length}</p>
                            <p>Chest: {item.chest}</p>
                            <p>Shoulder: {item.sholder}</p>
                        </div>
                    )
                })}
            </div>
            <div className='clothesListDiv'>
                <h4>Clothes Sizes</h4>
                {clothestData.map((item, index) => {
                    return (
                        <div className='listIndex' key={index}>
                            <p>Name: {item.name}</p>
                            <p>Length: {item.length}</p>
                            <p>Chest: {item.chest}</p>
                            <p>Shoulder: {item.sholder}</p>
                            <p>Pant: {item.pant}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ListSizes
