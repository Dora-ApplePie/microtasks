import React, {useState} from 'react';
import {MapComponent, studentsType} from "./MapComponent";
import {ButtonComponent} from "./ButtonComponent";
import {UniversalButton} from "./UniversalButton";
import Counter from "./Counter";
import FilterBank from "./FilterBank";


function MainFirst() {

    const [students, setStudents] = useState<studentsType[]>([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
            {id: 12, name: "James", age: 8},
            {id: 13, name: "John", age: 28},
            {id: 14, name: "Michael", age: 38},
            {id: 15, name: "William", age: 48},
            {id: 16, name: "David", age: 58},
            {id: 17, name: "Richard", age: 68},
            {id: 18, name: "Joseph", age: 78},
            {id: 19, name: "Thomas", age: 88},
            {id: 20, name: "Charles", age: 98},
            {id: 21, name: "Christopher", age: 100},
        ]
    )

    const onClickHandler = (subscriber?: string | number, age?: string | number) => {
        if (age === undefined) {
            age = 'private age'
        }
        if (subscriber === undefined) {
            subscriber = 'private name'
        }
        alert(`Name: ${subscriber}  age: ${age}`)
    }

    return (
        <div>
            <h2>================= Task 1 =================</h2>
            <MapComponent students={students}/>
            <h4>Buttons</h4>
            <ButtonComponent/>
            <h4>Universal buttons</h4>
            <UniversalButton name={"Ann"} callback={() => onClickHandler("Ann", 22)}/>
            <UniversalButton name={"Alex"} callback={() => onClickHandler("Alex")}/>
            <UniversalButton name={"Stupid"} callback={onClickHandler}/>
            <Counter/>
            <h4>Filter Bank</h4>
            <FilterBank/>
        </div>
    );
}

export default MainFirst;
