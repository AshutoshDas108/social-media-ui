import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostCard = () => {
  return (
    <Card className=''>

<CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ashutosh Das"
        subheader="@ashutosh_108"
      />

<CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"
      />
      

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions className='flex justify-between' disableSpacing>

        <div>
            <IconButton>

               {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}

            </IconButton>

            <IconButton>

               {<ShareIcon/>}

            </IconButton>

            <IconButton>

               {<ChatBubbleIcon/>}

            </IconButton>
                
            
        </div>
        <div>

            <IconButton>
                  {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
                </IconButton>

            </div>

      </CardActions>
    </Card>
  )
}

export default PostCard
