import React, { useState, useEffect}from 'react'
import SearchBox from './SearchBox'
import axios from 'axios';
import Display from './display/Display';
import Loader from 'react-spinners/BeatLoader';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { roles } from 'aria-query';
import { render } from '@testing-library/react';
import { concatSeries } from 'async';
import { SimpleConsoleLogger } from 'typeorm';


//values that match the values from API 
//label will display in the dropdown
const levelOptions = [
    { value: 'country', label: 'National'},
    { value: 'administrativeArea1', label:'State'},
    { value: 'administrativeArea2', label:'County'}
];


const roleOptions = [
    { value: 'headOfState', label: 'President'},
    { value: 'headOfGovernment', label: 'Governor'},
    { value: 'deputyHeadOfGovernment', label: 'Vice President'},
    { value: 'governmentOfficer', label: 'Goverment Officer'}
]

const federal = [
    { value: 'headOfState', label: 'President'}
]
const api = {
    key: "&key=AIzaSyBThznrGb43xbQJYUvuwSEyz8b1soqCbRI",
    base: "https://www.googleapis.com/civicinfo/v2/representatives?address="
  }


const CheckBox = ({ address, result, setResult, setDisplay }) => {

        const [loading, setLoading] = useState(false)


       
        async function submit() {
           setLoading(true)

            var checkBoxes = document.getElementsByClassName("dropDown-menu")

            console.log(checkBoxes);
            
            const levels = levelOptions.filter(value02 => value02.label === checkBoxes[0].innerText)
            console.log(levels);
        
            const roles = roleOptions.filter(value03 => value03.label === checkBoxes[1].innerText)
            console.log(roles);
       
            // const sampleStr = `${api.base}${address}&level=${}`
            //await fetch(api.base + address + "&levels=" + levels[0].value + "&roles=" +roles[0].value + api.key)
            await fetch(`${api.base}${address}&levels=${levels[0].value}&roles=${roles[0].value}${api.key}`)
            .then((response) => response.json())
            .then((data) => {
                setLoading(true)
                setResult(data)
                
                setDisplay(true)
                console.log(data);
               console.log("this is the result",result);
               //console.log(result.officials[0].name);
            })
            console.log("this is the address"+address);
         
        }
     
            
    return (


      <div>
            <div className="checkBox-container">
               <h1 className="drop-title">Choose Level</h1>
                <Dropdown className="dropDown-menu" 
                search selection
                //onChange={ ()=>setSelected(selected === levels)}
                options={levelOptions}  placeholder='Select your option'
               />
               
                <h1 className="drop-title">Choose Role</h1>
                <Dropdown className="dropDown-menu" 
                search selection
                options={roleOptions}  placeholder='Select your option'
               />

                <button 
               onClick={submit} className="submit-button">Submit</button>
            </div>
 
        </div>
        )
    }


export default CheckBox
