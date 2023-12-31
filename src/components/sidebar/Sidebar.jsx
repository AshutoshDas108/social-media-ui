import React, { useEffect, useState } from 'react'
import { navigationMenu } from './sideBarNavigation'
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

const Sidebar = () => {


  const {auth} = useSelector(store=>store)

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isLoggedIn, setIsLoggedin] = useState(true);

   const logout = () => {
        // localStorage.removeItem('jwt');
        localStorage.clear();
        setIsLoggedin(false);
        navigate('/login');
    };

    const profile = ()=>{
      navigate(`/profile/${auth?.user?.id}`);
    }

    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        setIsLoggedin(true)
        //navigate('/') --> done when click on LOGIN button in login.jsx
      }
    }, [isLoggedIn]);

    // useEffect(() => {
    //   if (!localStorage.getItem("jwt")) {
    //    navigate('/');
    //   }
    //  }, [localStorage.length]);

    
     

  const handleNavigate = (item) => {
     if(item.title === 'Profile') 
      {
        navigate(`/profile/${auth.user?.id}`);
      }
      else{
         navigate(item.path)    
      } 
    }



  return (
    <Card className='card h-screen flex-col justify-between py-2'>

      <div className='space-y-8 pl-8'>

        <div className=''>

          <span className='logo text-3xl font-bold'>Connect <InstagramIcon size='large'/> </span>

        </div>

        <div className='space-y-7'>

          {navigationMenu.map((item)=><div onClick={()=>handleNavigate(item)} className='flex space-x-1 items-center cursor-pointer'>
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

              <p className='font-bold'>{auth.user?.firstName +" "+ auth.user?.lastName}</p>
              <p className='opacity-70'>@{auth.user?.firstName.toLowerCase() +"_"+ auth.user?.lastName.toLowerCase()}</p>

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
        <MenuItem onClick={profile}>My Profile</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleClose}>Delete Account</MenuItem>
      </Menu>

        </div>
      </div>
      
    </Card>
  )
}

export default Sidebar
