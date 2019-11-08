import React from 'react';



const SmurfData = (props) => {
    console.log(`SmurfData`, props)
    return (
        <div>
           <p>{props.blue.name}</p>
        </div>
    )
}
export default SmurfData