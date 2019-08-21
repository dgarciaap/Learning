import React, {useState} from 'react';
import Tweet from './Tweet.js'
//Import style
import "./App.css"

function App() {
    /*your state begins with the value assigned (false and 0) and it changes from there
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    /*You can add an object as a state:
      const [user, setUser] = useState({
        name: 'Diana',
        age: 21,
        posts: ['Ties', 'Linked to a reality greater than me'];
      })
    */

    /*We use the consts from above
    const increment = () => {
        setCount(count + 1);
        setRed(true);
    }*/

    const [users, setUsers] = useState([
      {name: 'Diana', message: 'Psique de cianuro'},
      {name: 'Marvs', message: 'El queso bones'},
      {name: 'Silvia', message: "I'm a witch"}
    ]);

    return(
        <div className="app">
          {/*We use parenthesis (arrow function) instead of curly braces bc we want to return JSX */}
            {users.map(user => (
              //We get the name property from Tweet.js 
              <Tweet name={user.name} message={user.message}/>
            ))}
        </div>
    );
}

export default App;