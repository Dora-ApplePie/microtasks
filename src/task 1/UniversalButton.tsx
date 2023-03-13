import React, {MouseEvent} from "react";

type universalButtonType = {
    name?: string
    callback?: () => void
}

export const UniversalButton = (props: universalButtonType) => {

    const onClickHandler = () => {
        props.callback && props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
