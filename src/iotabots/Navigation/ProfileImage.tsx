import { Avatar } from '../../components'
import React from 'react'

interface ProfileImageType {
  id: number
}

const ProfileImage: React.FC<ProfileImageType> = ({ id }) => {
  if (id > 0) {
    const url = `https://assets.iotabots.io/compressed/${id}.png`
    return (
      <div>
        <Avatar alt='IOTABOTS' src={url} sx={{ width: 40, height: 40 }} />
      </div>
    )
  } else {
    return (
      <div>
        <Avatar
          alt='IOTABOT #1'
          src='https://assets.iotabots.io/compressed/1.png'
          sx={{ width: 40, height: 40 }}
        />
      </div>
    )
  }
}

export default ProfileImage
