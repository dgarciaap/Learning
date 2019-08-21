import React, {useState} from 'react';

function Tweet({name, message}) {
    return(
        <div className = 'tweet'>
            {/*We send the name from App.js name = "Diana" | you can also do it with props.name if u assign props as a parameter */}
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet;