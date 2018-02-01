import React from 'react'

export const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.onHandleChange} value={props.username}/>
        </div>
    )
}

export default UserInput