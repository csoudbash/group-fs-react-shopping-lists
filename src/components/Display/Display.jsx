import Items from '../Items/Items';

function DisplayItems({list}){
    console.log('in DisplayItems');
    console.log(('list is', list));
    return (
        <>
        <ul>
         {list.map(item => 
            <Items key={item.id}
             item={item}
            />
            
            )}
        </ul>
        </>
    )
}

export default DisplayItems;