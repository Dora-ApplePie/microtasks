import React, {ChangeEvent} from 'react';

type UniversalInputType = {
    setTitle: (title: string) => void
    value: string
}

const UniversalInput = (props: UniversalInputType) => {

    function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <input value={props.value} onChange={onChangeInputHandler}/>
    );
};

export default UniversalInput;
