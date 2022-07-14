import React, { useState, useEffect } from 'react'

function HookCounter() {
    // const [count, setCount] = useState(0)
    const [isLoading, setisLoading] = useState(false);

    const toggleIsLoading = () => {
        setisLoading(current => !current);
    };

    useEffect(() => {
        console.log('isLoading is: ', isLoading)
    }, [isLoading])
    
    return (
        <div>
           <button onClick={toggleIsLoading}> Toggle loading state</button>
           {isLoading && <h2>Loading....</h2>}
        </div>
    )
}

export default HookCounter
