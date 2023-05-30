import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type filterType = 'all' | 'rubles' | 'dollars'

function App() {

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'Rubles', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'Rubles', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<filterType>('all')

    let currentMoney = money;
    if (filter === 'dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Dollars')
    }
    if (filter === 'rubles') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Rubles')
    }

    const onClickFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }

    return (
        <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>

    );
}

export default App;
