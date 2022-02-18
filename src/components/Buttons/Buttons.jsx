function ButtonsRender({ item, purchaseItem, deleteItem }) {

    const handlePurchase = () => {
        console.log('Item purchased');
        purchaseItem(item.id)
    }

    const handleDelete = () => {
        console.log('Item deleted!');
        deleteItem(item.id)
    }
    return (
        <>
            <button onClick={handleDelete}>Delete!</button>
            <button onClick={handlePurchase}>Purchase!</button>
        </>
    )
}
export default ButtonsRender;