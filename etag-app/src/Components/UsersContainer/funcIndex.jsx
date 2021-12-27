import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from '../Users'

console.time('function');
function UsersContainer() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then((itr) => {
            setUsers(itr.data.data)
        })
    }, [])

    console.timeEnd('function');
    return <Users users={users} />;

}

export default UsersContainer;