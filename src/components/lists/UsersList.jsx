import React from "react";

import c from './users_list.module.css';

const users = [
    {name: 'Ivan', age: 23,},
    {name: 'ZHeka', age: 31,},
    {name: 'Katya', age: 30,},
    {name: 'Timon', age: 4,},
    {name: 'Set', age: 5,}
];

function User (props){
    return (
        <li>
            <span>{props.name}</span>

            <span>{props.age}</span>
        </li>
    );
};

function UsersList (){
    const usersArr = users.map(item => <User key={item.name} name={item.name} age={item.age}/>);

    return (
        <ul>
            {usersArr}
        </ul>
    );
};

export default UsersList;