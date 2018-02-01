import React from 'react'

export const UserInput = (props) => {
    return (
        <div>
            <input onChange={props.onHandleChange} />
        </div>
    )
}

export default UserInput