import React, { useState } from 'react'
import CheckBox from './CheckBox'
import Display from './display/Display'

const SearchBox = () => {
    const [address, setAddress] = useState('')
    const [result, setResult] = useState([])
    const [display, setDisplay] = useState(false)

    const handleChange=(event) => {
        setAddress(event.target.value)
        event.preventDefault()
    }

    const handleSubmit=(event) => {
        event.preventDefault()
    }
    return (
       <form onSubmit={handleSubmit}>
        <div className="input-container">
            <h1 className="input-title">Find your Representatives</h1>
            <input onChange={handleChange}type="string" className="input-box" placeholder="Type in address..."/>
            <CheckBox address={address} result={result} setResult={setResult} setDisplay={setDisplay}/>
            <Display result={result} display={display}/>
        </div>
        </form>

    )
}


export default SearchBox
