import React, {ChangeEvent, useState} from 'react';
import {FullInput} from "./components/FullInput";
import UniversalInput from "./components/UniversalInput";
import {UniversalButton} from "../task 1/components/UniversalButton";


function MainSecond() {

    let [serverInfo, setServerInfo] = useState([
        {status: '200'},
        {status: '404'},
        {status: '501'},
    ])

    let [title, setTitle] = useState('')

    function setServerInfoHandler(newInfo: string) {
        setServerInfo([{status: newInfo}, ...serverInfo]);
    }

    function setInfoHandler() {
        setServerInfoHandler(title)
        setTitle('')
    }

    return (
        <div>
            <h2>================= Task 2 =================</h2>
            <h4>FullInput component</h4>
            <FullInput setServerInfoHandler={setServerInfoHandler}/>
            <ul>
                {serverInfo.map((s, i) => <li key={i}>{s.status}</li>)}
            </ul>
            <h4>Universal Input and Universal button components</h4>
            <>
                <UniversalInput setTitle={setTitle} value={title}/>
                <UniversalButton name={"Add"} callback={setInfoHandler}/>
            </>
        </div>
    );
}

export default MainSecond;
