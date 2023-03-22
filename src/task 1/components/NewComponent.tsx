import React from 'react';
import {FilterType, MoneyType} from "./FilterBank";
import {UniversalButton} from "./UniversalButton";

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
            <UniversalButton name={"All"} callback={() => props.onClickHandler("all")}/>
            <UniversalButton name={"Rubles"} callback={() => props.onClickHandler("ruble")}/>
            <UniversalButton name={"Dollars"} callback={() => props.onClickHandler("dollar")}/>
        </>
    );
}

export default NewComponent;
