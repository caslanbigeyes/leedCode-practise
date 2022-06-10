import React, { useEffect, useState } from 'react';

function App() {
    let [count, setCount] = useState(1);
    console.log(`outer count = ${count}`)

    useEffect(() => {
        setInterval(() => { console.log(`inner count = ${count}`) }, 1000);
    }, [])

    const onClick = () => {
        setCount(count++);
    }

    return (<div onClick={onClick}> {count} </div>);
}


export default App;