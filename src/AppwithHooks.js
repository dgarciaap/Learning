import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//Hooks
const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Diana', age: '21'},
      { name: 'Marvs', age: '22'},
      { name: 'Omar', age: '22'}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    //console.log('clicked');
    //DON'T DO THIS to change state: personsState.persons[0].name = 'Laura';
    //On hooks: setPersonState replaces ur old state so you need to write those that won't change or use different useState
    setPersonsState({
      persons: [
        { name: 'Diana', age: '21'},
        { name: 'Marvs', age: '22'},
        { name: 'OA', age: '22'}
      ],
      otherState: personsState.otherState
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      {/*We don't use "this.switchNameHandler()" bc it's gonna execute inmediately once the app renders itself*/}
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: exploring</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;
