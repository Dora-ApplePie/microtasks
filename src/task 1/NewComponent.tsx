import React from 'react';
import {FilterType, MoneyType} from "./FilterBank";

type PropsType = {
    onClickHandler: (filterValue: FilterType) => void
    currentMoney: MoneyType[]
}

function NewComponent(props: PropsType) {


    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, i) => {
                    return (
                        <li key={i}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickHandler("all")}>All</button>
            <button onClick={() => props.onClickHandler("ruble")}>Rubles</button>
            <button onClick={() => props.onClickHandler("dollar")}>Dollars</button>
        </>
    );
}

export default NewComponent;
