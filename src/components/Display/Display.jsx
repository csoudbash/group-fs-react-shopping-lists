import Items from '../Items/Items';

function DisplayItems({list, purchaseItem, deleteItem}){
    console.log('in DisplayItems');
    console.log(('list is', list));
    return (
        <>
        <ul>
         {list.map(item => 
            <Items key={item.id}
             item={item}
             purchaseItem={purchaseItem}
             deleteItem = {deleteItem}
            />
            
            )}
        </ul>
        </>
    )
}

export default DisplayItems;