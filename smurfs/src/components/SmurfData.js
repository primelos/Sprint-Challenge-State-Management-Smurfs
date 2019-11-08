import React from 'react';



export const SmurfData = ({smurfs}) => {
    // console.log(`SmurfData`, smurfs)
    return (
        <div>
            {smurfs.map(blue => {
                const {id, name, age, height} = blue
                return(
                    <div>
                        <h3>Name: {name}</h3>
                        <p>Age: {age}</p>  
                        <p>Height: {height}</p>  
                    </div>
                )
            })}
          
        </div>
    )
}
