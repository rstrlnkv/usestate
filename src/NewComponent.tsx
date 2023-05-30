import React from 'react';
import {filterType} from './App'

type NewComponentType = {
    currentMoney: BanknotesType[],
    onClickFilterHandler: (nameButton: filterType) => void
}

export type BanknotesType = {
    banknotes: string,
    value: number,
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknotes}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('all')}>All</button>
                <button onClick={() => props.onClickFilterHandler('rubles')}>Rubles</button>
                <button onClick={() => props.onClickFilterHandler('dollars')}>Dollars</button>
            </div>

        </>
    );
}