import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";


function MainSecond() {

    let [serverInfo, setServerInfo] = useState([
        {status: '200'},
        {status: '404'},
        {status: '501'},
    ])

    function setServerInfoHandler(newInfo: string) {
        setServerInfo([{status: newInfo},...serverInfo]);
    }

    return (
        <div>
            <h2>================= Task 2 =================</h2>
            <FullInput setServerInfoHandler={setServerInfoHandler}/>
            <ul>
                {serverInfo.map((s, i) => <li key={i}>{s.status}</li>)}
            </ul>
        </div>
    );
}

export default MainSecond;
