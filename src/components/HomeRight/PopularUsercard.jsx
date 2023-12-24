import { Avatar, Button, CardHeader, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PopularUsercard = () => {
  return (
    <div>

<CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <Button size='small'>
            Follow
          </Button>
        }
        title="Sudeepta Sagarika"
        subheader="@Sudeepta_123"
      />
      
    </div>
  )
}

export default PopularUsercard
