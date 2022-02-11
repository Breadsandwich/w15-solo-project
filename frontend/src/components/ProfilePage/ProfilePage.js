import React from 'react'
import './ProfilePage.css'

function profilePage() {
  return (
    <div id='profile_container'>
        <div id='a'>

          <div className='profile_image'>
            image
          </div>

          <div className='username'>
            <h2>username</h2>
          </div>

        </div>

        <div id='b'>
          <h2 className='profile_label'>my profile</h2>
          <div className='user_details_box'>
            <h3>name</h3>
            <p>location</p>
            <p>biooooooooooooooooooooooooooo</p>
          </div>
        </div>


    </div>
  )
}

export default profilePage
