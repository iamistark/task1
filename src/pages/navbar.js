import React from 'react'

const navbar = () => {
  return (
    <div className='navbar_container'>
        <ul>
            <li><a href="/home"></a>Invite friends</li>
            <li><a href="/Jobs"></a>find Jobs</li>
            <li><a href="/Login"></a>Login</li>
            <li><a href="/Signup"></a>Signup</li>
            <li className="employers"><a href="/Employers"></a>Employers</li>
        </ul>
    </div>
  )
}

export default navbar