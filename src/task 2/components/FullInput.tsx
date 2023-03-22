import React, {ChangeEvent, useState} from 'react';
import {UniversalButton} from "../../task 1/components/UniversalButton";

type propsType = {
    setServerInfoHandler: (newInfo: string) => void
}

export const FullInput = (props: propsType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickSetInfoHandler = () => {
        props.setServerInfoHandler(title);
        setTitle('');
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <UniversalButton callback={onClickSetInfoHandler} name={"Add info"}/>
        </div>
    )
}
