//*************************************************
/*import React, { useState } from 'react';

// Modify this component so that it behaves​​​​​​‌​‌​​‌‌‌​​​​​​​‌‌‌​​​​​​‌ properly

function ResultDisplayer({ getNewResult }){
    let [result, setResult] = useState(null);

    function handleClick(){
        const newResult = getNewResult();
        setResult(newResult);
    }

    return (<div>
        <button id="button" onClick={handleClick}>Click</button>
        {result != null && <span id="result">{result}</span>}
    </div>);
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <ResultDisplayer getNewResult={() => 'testABC'} />;
}

// Do not change
export default ResultDisplayer;*/

//************************************************
/*import React from 'react';

// Create the Label React component​​​​​​‌​‌​​‌‌‌​​​​​​​‌‌‌​​​​​​‌ here
function ListUsers({ users }) {
    if (!users || users.length === 0) {
        return (
            <div>
                <div className='user-count'>Users: 0</div>
            </div>
        );
    }

    const sortedUsers = users.slice().sort((a, b) => a.lastName.localeCompare(b.lastName, undefined, { sensitivity: 'base' }));

    return (
        <div>
            <div className='user-count'>Users: {sortedUsers.length}</div>
            <ul className='user-list'>
                {sortedUsers.map((user, index) => (
                    <li key={index}>{user.firstName} {user.lastName}</li>
                ))}
            </ul>
        </div>
    );
}
// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <ListUsers users={[{firstName: 'Donald', lastName: 'Knuth'}, {firstName: 'Ada', lastName: 'Lovelace'}]} />;
}
// Do not change
export default ListUsers;*/

//Counter*****************************************
/*import React, { useState } from 'react';
function Counter() {
    const [value, setValue] = useState(0);
    const incrementValue = () => {
        setValue(value + 1);
    };
    const decrementValue = () => {
        setValue(value - 1);
    };
    return (
        <div>
            <p id="value">{value}</p>
            <button id="increment" onClick={incrementValue}>+</button>
            <button id="decrement" onClick={decrementValue}>-</button>
        </div>
    );
}
// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <Counter />;
}
// Do not change
export default Counter;*/

//WelcomeTitle********************************************
/*import React from 'react';

function WelcomeTitle({ primary, user }) {
    const text = user ? `Welcome ${user}!` : "Welcome!";

    return (
        primary ? <h1>{text}</h1> : <h2>{text}</h2>
    );
}
export function Preview() {
    return <WelcomeTitle user='Peter' primary />;
    // return <WelcomeTitle />;
}

export default WelcomeTitle;*/

//Blink***************************************************
/*import React, {useState, useEffect} from "react";
function Blink({children}){
    const [visible, setVisible] = useState(true);
useEffect(()=>{
    const  timeoutId = setTimeout(()=>{
        setVisible((prev)=>!prev);
    },1000);
    return()=>{
        clearTimeout(timeoutId);
    };
},[visible]);
return (<span style={{visibility:visible?"visible":"hidden"}}>
    {children}</span> )
}
function Preview() {
    return <Blink>Solution</Blink>
}
export default Preview;*/

/*import React, { Component } from 'react';
class Blink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true
        };

        this.blinkInterval = setInterval(() => {
            this.setState(prevState => ({
                isVisible: !prevState.isVisible
            }));
        }, 1000); // 1000 ms (1 seconde)
    }
    componentWillUnmount() {
        // Assurez-vous de nettoyer l'intervalle lorsqu'on démonte le composant
        clearInterval(this.blinkInterval);
    }
    render() {
        const { isVisible } = this.state;
        const style = {
            display: isVisible ? 'inline' : 'none'
        };
        return (
            <span style={style}>
        {this.props.children}
      </span>
        );
    }
}
export function Preview() {
    return (
        <div>
            <Blink>Solution</Blink>
        </div>
    );
}
export default Preview;*/

//UserInfoWithTitle**************************************
/*import React from "react";
function Page({ user }) {
    return (
        <div>
            <UserInfoWithTitle title="User Info" user={user} />
        </div>
    );
}
function UserInfoWithTitle({ title, user }) {
    return (
        <div>
            <div>{title}</div>
            <UserInfo user={user} />
        </div>
    );
}
function UserInfo({ user }) {
    return (
        <div>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
        </div>
    );
}
function Preview() {
    return (
        <Page user={{firstName: 'John', lastName: 'Doe',}}/>
    );
}
export default Preview;*/

//ChildParent********************************************
/*import React, {useState} from "react";
function Child({ onValueChange }) {
    // Utiliser useState pour créer un état local
    let [value, setValue] = useState("test");

    // Utiliser la fonction handleChange comme attribut onChange de l'input
    function handleChange(event) {
        value = event.target.value;
        setValue(value); // Mettre à jour l'état local
        onValueChange(value); // Remonter la valeur au Parent
    }
    return (
        <div>
            <input id="input" type="text" value={value} onChange={handleChange} />
        </div>
    );
}
function Parent({ initial }) {
    // Utiliser la fonction de mise à jour renvoyée par useState
    const [value, setValue] = useState(initial);

    // Créer une fonction pour remonter la valeur du Child
    function handleValueChange(newValue) {
        setValue(newValue); // Mettre à jour l'état du Parent
    }

    return (
        <div>
            <div id="value">{value}</div>
            {/!* Passer la fonction comme prop au Child *!/}
            <Child value={value} onValueChange={handleValueChange} />
        </div>
    );
}

// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
export function Preview() {
    return <Parent initial='test' />;
}

// Do not change
export {
    Parent,
    Child
}*/

//ParentHexedChild***************************************
/*import React from "react";
function Child({ value }) {
    return <div id="child">{value}</div>;
}
function Hexed({ value, component }) {
    const hex = "0x" + value.toString(16);
    return (
        <div id="hexed">
            {React.createElement(component, { value: hex })}
        </div>
    );
}
function Parent({ value }) {
    return <Hexed value={value} component={Child} />;
}

function Preview() {
    return <Parent value={42} />;
}
export default Preview
// {
//     Parent,
//     Hexed,
//     Child,
// };*/

//InputWithFocusButton***********************************
/*import React, {useRef} from 'react';
function InputWithFocusButton() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
      <div>
          <input type='text' ref={inputRef} />
        <button onClick={handleFocus}>Focus input field</button>
      </div>
  );
}
function Preview() {
  return <InputWithFocusButton />;
}
export default InputWithFocusButton;*/


