
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import './App.css';
import FormList from '../FormList/FormList.jsx';
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

    useEffect(() =>{
        console.log('in useEffect');
        getItems();
    }, [])
    console.log(itemList);

  

    // console.log(itemList);
    return (
        <div className="App">
            <Header />
            <main>
                <Display
                list ={itemList}
                />
                <FormList />
            </main>

        </div>
    );
}

export default App;
