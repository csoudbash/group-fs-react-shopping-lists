
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import FormList from '../FormList/FormList.jsx';
import Display from '../Display/Display'


function App() {
    let [itemList, setItemList] = useState([]);

    
    const deleteItem = (id) => {
        console.log('It made it back to app.jsx! Deleting', id)
        // axios({
        //     method: 'DELETE',
        //     url: `/delete/${id}`
        // })
        //     .then((response) => {
        //         console.log('DELETE response.data is', response.data)
        //         fetchStudents();
        //     }).catch((err) => {
        //         console.log('DELETE error is', err)
        //     })
    }

    const getItems = () => {
        // console.log('in getItems');
        axios({
            method: 'GET',
            url: '/list'
        }).then( (response) => {
            console.log('Entire response is', response);
            // console.log('Just data', response.data);
            setItemList(response.data);
        }).catch((error) => {
            console.log('Error getting list', error);
        })
    }

    const purchaseItem = (id) => {
        console.log('The purchase made it back to app.jsx! Updating', id)
        axios({
            method: 'PUT',
            url: `/list/${id}`,
            data: {
                isPurchased: 'TRUE'
            }
        })
            .then((response) => {
                console.log('PUT response.data is', response.data)
                getItems();
            }).catch((err) => {
                console.log('PUT error is', err)
            })
    }

    useEffect(() =>{
        console.log('in useEffect');
        getItems();
    }, [])
    // console.log(itemList);
    
  

    // console.log(itemList);
    return (
        <div className="App">
            <Header />
            <main>
                <FormList />
                <Display
                deleteItem = {deleteItem}
                purchaseItem = {purchaseItem}
                list ={itemList}
                />
                
            </main>

        </div>
    );
}

export default App;
