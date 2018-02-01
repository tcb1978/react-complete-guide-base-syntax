import React from 'react'

export const UserOutput = (props) => {
    const style = {
        color: '#17bcd6'
    }
    return(
        <div style={style}>
            <p>{props.username}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default UserOutput

