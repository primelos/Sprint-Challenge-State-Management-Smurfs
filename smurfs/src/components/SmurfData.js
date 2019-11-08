import React from 'react';



export const SmurfData = ({smurfs}) => {
    // console.log(`SmurfData`, smurfs)
    return (
        <div>
            {smurfs.map(blue => {
                const {id, name, aga, height} = blue
                return(
                    <div>
                        {name}    
                    </div>
                )
            })}
          
        </div>
    )
}
