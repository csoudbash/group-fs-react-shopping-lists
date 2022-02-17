
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import FormList from '../FormList/FormList.jsx';


function App() {
    let [itemList, setItemList] = useState([]);

    const getItems = () => {
        console.log('in getItems');
        axios({
            method: 'GET',
            url: '/list'
        }).then( (response) => {
            console.log('Entire response is', response);
            console.log('Just data', response.data);
            setItemList(response.data);
        }).catch((error) => {
            console.log('Error getting list', error);
        })
    }
    useEffect(() =>{
        console.log('in useEffect');
        getItems();
    }, [])
    console.log(itemList);
    return (
        <div className="App">
            <Header />
            <FormList />
        </div>
    );
}

export default App;
