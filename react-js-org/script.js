function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    )
    
}


setInterval(tick, 1000);  //Just for example , React mostly Render once.


/*

React update only necessary elements that was changed.
*/