import React from 'react'


const Students = (props) => {
    console.log(props);
    return (
        <div>
            <h2>{props.name}</h2>
        </div>
    );
    
    
}

export default Students