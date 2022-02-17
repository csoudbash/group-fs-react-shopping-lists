
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import Display from '../Display/Display'


function App() {
    let [itemList, setItemList] = useState([]);

    useEffect(() =>{
        console.log('in useEffect');
        getItems();
        console.log(itemList);
    }, []);

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
  

    // console.log(itemList);
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <Display
                list ={itemList}
                />
            </main>
        </div>
    );
}

export default App;
