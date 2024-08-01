import React, { useState,useEffect } from 'react';

const Tab = () => {
    const [tab, setTab] = useState("");
    const tab1 = ()=> {
        setTab("tab 1")
    }
    const tab2 = ()=> {
        setTab("tab 2")
    }
    const tab3 = ()=> {
        setTab("tab 3")
    }

    useEffect(() => {
        setTab("tab 1")
    }, [tab]);

    return (
        <div>
            <button onClick={tab1}>Tab 1</button>
            <button onClick={tab2}>Tab 2</button>
            <button onClick={tab3}>Tab 3</button>
            <p>Content For {tab}</p>
        </div>
    );
}

export default Tab;
