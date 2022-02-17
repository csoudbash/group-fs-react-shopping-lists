// import {useState} from 'react';

function Items({item}){


    return (
        <>
        <li key={item.id}>
        {item.quantity} {item.unit} {item.name}  
        </li> 
         
        </>
    )



}

export default Items;