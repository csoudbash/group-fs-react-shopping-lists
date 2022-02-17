
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';


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

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
