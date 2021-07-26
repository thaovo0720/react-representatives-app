import React, {useState}from 'react'

import Loader from '../Loader';
import data from '../CheckBox';
import CheckBox from '../CheckBox';

const Display = ({ result, display }) => {
    console.log("res",result)
    if (display === true){
   
    return   (
      <div className="card-container">
          
            {result.officials.map((official, index)=> {
                return (
                    <div>
                    <img className="person-photo"src={official.photoUrl}/>
                   
                    <h1 className="person-name">{official.name}</h1>
                    <h1 className="person-name">{result.offices[index].name}</h1>
                    <h2 className="person-name-02">{official.address.map(addy => {
                        return (
                            <div>
                                <h1 className="person-name-02">{addy.line1+ ' ' +addy.city+ ', ' +addy.state + ' ' + addy.zip}</h1>
                            </div>
                        )
                    })}</h2>
                    </div>
                )
            } ) 
        }
     
       </div>
    )
    
    }
else{
    return(
            <div>

            </div>
    )
}
}
export default Display
