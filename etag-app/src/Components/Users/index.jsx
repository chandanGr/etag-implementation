import React from 'react';

//presentational component
function Users (props) {
    return (
        <ul>
            {props.users.length > 0 && props.users.map((user) => {
                return (
                    <tr>
                        <td>Year: { user.Year } </td>
                        <td>Population: { user.Population }</td>
                    </tr>
                );
            })}
        </ul>
    );
};

export default Users;
