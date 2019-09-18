import React from 'react';

/*With props you have access to all the properties/atributes of ur component
If we were using a class-based component we'd use {this.props.name}
*/
const person = (props) => {
    //{} for js into jsx
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age}!</p>
            {/*props.children gives access to the component <Person> THIS </Person> */}
            <p>{props.children}</p>
        </div>
    )
}

export default person;