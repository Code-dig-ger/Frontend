import React from 'react'

function FriendList({friends}) {
    
    return (
        <div>
            {console.log(friends)}
          <ul>
            {
             friends.result.map(function(friend){
                 return(
                    <li>{friend.name} <b>({friend.username})</b></li>
                 )
               
             })
           }
          </ul>
        </div>
      )
}

export default FriendList
