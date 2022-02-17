import {useState} from 'react';
import axios from 'axios';
function FormList() {

    
    const [newItemName, setItemName] = useState('');
    const [newItemQuantity, setItemQuantity] = useState('');
    const [newItemUnit, setItemUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('new item submitted!')

        axios({
            method: 'POST',
            url: '/list',
            data: {
                name: newItemName,
                quantity: newItemQuantity,
                unit: newItemUnit
            }
        })
            .then((response) => {
                console.log('Response:', response);
                //Clear Inputs & State
                setItemName('');
                setItemQuantity('');
                setItemUnit('');
            })
            .catch(function (error) {
                console.log('Error on add:', error);
            });
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text"
                onChange={(event) => setItemName(event.target.value)}
                value={newItemName}
            
            />
            <label>Quantity:</label>
            <input 
                type="number"
                onChange={(event) => setItemQuantity(event.target.value)}
                value={newItemQuantity}
            
            />
            <label>Unit:</label>
            <input 
                type="text"
                onChange={(event) => setItemUnit(event.target.value)}
                value={newItemUnit}
            
            />
            <button type="submit">Save</button>

        </form>
    )
}
export default FormList;