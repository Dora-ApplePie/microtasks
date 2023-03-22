import React, {useState} from 'react';
import NewComponent from "./NewComponent";

export type FilterType = 'all' | 'dollar' | 'ruble';

export type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

function FilterBank() {

    const [money, setMoney] = useState<MoneyType[]>([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filterValue, setFilterValue] = useState<FilterType>('all')

    let currentMoney = money;

    if (filterValue === 'dollar') {
        currentMoney = money.filter(current => current.banknote === 'dollar');
    }
    if (filterValue === 'ruble') {
        currentMoney = money.filter(current => current.banknote === 'ruble');
    }

    const onClickHandler = (filterValue: FilterType) => {
        setFilterValue(filterValue)
    }


    return (
        <NewComponent currentMoney={currentMoney} onClickHandler={onClickHandler}/>
    );
}

export default FilterBank;
