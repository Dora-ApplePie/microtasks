import React, {MouseEvent} from "react";


export const ButtonComponent = () => {

    const onClickFirstHandler = (event: MouseEvent<HTMLButtonElement>) => {
        alert("Hello, I am Wilhelm!")
    }

    const onClickSecondHandler = (name: string) => {
        alert(`Hello, I am ${name}!`)
    }

    return (
        <div>
            {/*<button onClick={(event)=>{alert('hello!')}}>MyYouTubeChanel-0</button>*/}
            <button onClick={onClickFirstHandler}>MyYouTubeChanel-1</button>
            <button onClick={() => onClickSecondHandler('Dora The Explorer')}>MyYouTubeChanel-2</button>
        </div>
    )
}
