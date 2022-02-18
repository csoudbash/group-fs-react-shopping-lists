// import {useState} from 'react';
import './Items.css';
import ButtonsRender from '../Buttons/Buttons'

function Items({ item, purchaseItem, deleteItem }) {

    

    

    console.log('item is purchased:', item)
    return (

            <li key={item.id}>
                {item.quantity} {item.unit} {item.name}

                {!item.ispurchased ?
                    <ButtonsRender item={item}
                        purchaseItem={purchaseItem}
                        deleteItem = {deleteItem}/>  
                    : <p>Purchased</p>
                }

        </li>
    )



}

export default Items;