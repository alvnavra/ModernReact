//Import the React and the ReactDom Libraries
import React from 'react';
import ReactDom from 'react-dom';

//Create a React Component

function getButtonText()
{
    return 'Click on me'
}

const App = () =>
{
    //const buttonText = 'Click Me!!'
    return (
    <div>
        <label className="label" htmlFor="name"> Enter Name:</label>
        <input id="name"/>
        <button type="submit" style={{backgroundColor:'blue', color:'white'}}> {getButtonText()} </button>
    </div>
    )
}

//Take the react component and show it on the screen
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)