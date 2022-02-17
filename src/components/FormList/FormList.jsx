import {useState} from 'react';

function FormList() {

    
    const [newItemName, setItemName] = useState('');
    const [newItemQuantity, setItemQuantity] = useState('');
    const [newItemUnit, setItemUnit] = useState('');
    const handleSubmit = (event) => {
        console.log('new item submitted!')
    }
        console.log('new item submitted!')

    return(
        <form>
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
            <button type="submit" onSubmit={handleSubmit}>Save</button>

        </form>
    )
}
export default FormList;