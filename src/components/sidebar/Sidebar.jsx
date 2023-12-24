import React, { useState } from 'react'
import { navigationMenu } from './sideBarNavigation'
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar = () => {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Card className='card h-screen flex-col justify-between py-2'>

      <div className='space-y-8 pl-8'>

        <div className=''>

          <span className='logo font-bold text-2xl'>Our Socials</span>

        </div>

        <div className='space-y-7'>

          {navigationMenu.map((item)=><div className='flex space-x-1 items-center cursor-pointer'>
            {item.icon}
            <p className='text-xl'>{item.title}</p>
          </div>)}

        </div>

      </div>

      <div>
        <Divider  sx={{ borderTop: "2px solid black", marginTop: '20px'}} />
        <div className=' pl-5 flex items-center justify-between pt-5'>

          <div className='flex items-center space-x-3'>

            <Avatar src=" "/>

            <div>

              <p className='font-bold'>Ashutosh Das</p>
              <p className='opacity-70'>@ashutosh_108</p>

            </div>

          </div>

          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ fontSize: "2rem" }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

        </div>
      </div>
      
    </Card>
  )
}

export default Sidebar
