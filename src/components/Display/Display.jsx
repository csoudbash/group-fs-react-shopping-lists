function DisplayItems({list}){
    console.log('in DisplayItems');
    console.log(('list is', list));
    return (
        <>
        <ul>
         {list.map(item => 
            <li key={item.id}>{item.name}</li>)}
        </ul>
        </>
    )
}

export default DisplayItems;