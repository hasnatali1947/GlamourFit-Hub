"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import "../app/style/homeScreen.css"
import Header from '@/components/header'
import { useStateContext } from '../context/context'

const HomeScreen = () => {

    const [name, setName] = useState('');
    const [length, setLength] = useState('');
    const [hand, setHand] = useState('');
    const [chest, setChest] = useState('');
    const [sholder, setSholder] = useState('');
    const [pant, setPant] = useState('');
    const [selectItem, setSelectItem] = useState('coat')

    const {
        coatData,
        setCoatData,
        vestcoatData,
        setvestcoatData,
        clothestData,
        setClothesData
    } = useStateContext()

    const SubmitCoat = (e) => {
        e.preventDefault()

        if (!name || !length || !hand || !chest || !sholder) {
            alert('please fill the inputs')
        } else {

            const coatList = {
                name,
                length,
                hand,
                chest,
                sholder
            }
            const displayCoatData = [...coatData, coatList]
            localStorage.setItem('setcoat', JSON.stringify(displayCoatData))
            setCoatData(displayCoatData);
            setName("")
            setLength("")
            setHand("")
            setChest("")
            setSholder("")
        }
    };

    const SubmitVestCoat = (e) => {
        e.preventDefault()

        if (!name || !length || !chest || !sholder) {
            alert('please fill the inputs')
        } else {
            const vestcoatList = {
                name,
                length,
                chest,
                sholder
            }

            const displayvestCoatdata = [...vestcoatData, vestcoatList]
            localStorage.setItem('setvest', JSON.stringify(displayvestCoatdata))
            setvestcoatData(displayvestCoatdata)
            setName("")
            setChest("")
            setHand("")
            setLength("")
            setSholder("")
        }
    }

    const SubmitClothes = (e) => {
        e.preventDefault()

        if (!name || !length || !hand || !chest || !sholder || !pant) {
            alert('please fill the inputs')
        } else {
            const clothesList = {
                name,
                length,
                chest,
                hand,
                sholder,
                pant
            }

            const displayClothes = [...clothestData, clothesList]
            localStorage.setItem('setClothes', JSON.stringify(displayClothes))
            setClothesData(displayClothes)
            setName("")
            setChest("")
            setHand("")
            setLength("")
            setSholder("")
            setPant("")
        }
    }

    return (
        <>
            <Header />
            <section className='homeScreenSec'>
          
                <div className='divMain'>
                    <h2>Glamour souting</h2>
                    <form>
                        <label htmlFor='itemSelector'>Select Item:</label>
                        <select id='itemSelector' onChange={(e) => { setSelectItem(e.target.value) }}>
                            <option value="coat">Coat</option>
                            <option value="vestCoat">Vestcoat</option>
                            <option value="clothes">Clothes</option>
                        </select>
                        <div className='formDiv'>

                            {selectItem === 'coat' ?
                                <div className='list-Div'>
                                    <h3>Coat Size</h3>
                                    <input required value={name} type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                                    <input required value={length} type="number" placeholder='length' onChange={(e) => { setLength(e.target.value) }} />
                                    <input required value={hand} type="number" placeholder='hand' onChange={(e) => { setHand(e.target.value) }} />
                                    <input required value={chest} type="number" placeholder='chest' onChange={(e) => { setChest(e.target.value) }} />
                                    <input required value={sholder} type="number" placeholder='sholder' onChange={(e) => { setSholder(e.target.value) }} />
                                    <button onClick={SubmitCoat}>Submit</button>
                                </div>
                                : ""}
                            {selectItem === 'vestCoat' ?
                                <div className='list-Div'>
                                    <h3>Vestcoat Size</h3>
                                    <input required value={name} type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                                    <input required value={length} type="number" placeholder='length' onChange={(e) => { setLength(e.target.value) }} />
                                    <input required value={chest} type="number" placeholder='chest' onChange={(e) => { setChest(e.target.value) }} />
                                    <input required value={sholder} type="number" placeholder='sholder' onChange={(e) => { setSholder(e.target.value) }} />
                                    <button onClick={SubmitVestCoat}>Submit</button>
                                </div>
                                : ""}
                            {selectItem === 'clothes' ?
                                <div className='list-Div'>
                                    <h3>Clothes Size</h3>
                                    <input required value={name} type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                                    <input required value={length} type="number" placeholder='length' onChange={(e) => { setLength(e.target.value) }} />
                                    <input required value={hand} type="number" placeholder='hand' onChange={(e) => { setHand(e.target.value) }} />
                                    <input required value={chest} type="number" placeholder='chest' onChange={(e) => { setChest(e.target.value) }} />
                                    <input required value={sholder} type="number" placeholder='sholder' onChange={(e) => { setSholder(e.target.value) }} />
                                    <input required value={pant} type="number" placeholder='pant' onChange={(e) => { setPant(e.target.value) }} />

                                    <button onClick={SubmitClothes}>Submit</button>
                                </div>
                                : ""}
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default HomeScreen
