import React from 'react';
import style from "./MapComponent.module.css";

export type newComponentPropsType = {
    students: studentsType[]
}

export type studentsType = {
    id: number
    name: string
    age: number
}

export function MapComponent(props: newComponentPropsType) {
    const topCars = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]
    return (
        <div>
            <ul>
                {props.students.map((s, index) => {
                    return <li key={s.id}>{s.name}<span>, age: {s.age}</span></li>
                })}
            </ul>
            <h3>Cars Table</h3>
            <table>
                <thead><tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr></thead>
                <tbody>
                {topCars.map((car, i) => {
                    return <tr key={i}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
};
