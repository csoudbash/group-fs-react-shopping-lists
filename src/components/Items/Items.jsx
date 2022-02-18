// import {useState} from 'react';
import './Items.css';

function Items({item, purchaseItem, deleteItem}){

    const handlePurchase = () => {
        console.log('Item purchased');
        purchaseItem(item.id)
    }
    
    const handleDelete = () => {
        console.log('hello!');
        deleteItem(item.id)
    }

    return (
        <>
        <li key={item.id}>
        {item.quantity} {item.unit} {item.name}  
        </li> 
         <button onClick={handleDelete}>Delete!</button>
         <button onClick={handlePurchase}>Purchase!</button>
        </>
    )



}

export default Items;