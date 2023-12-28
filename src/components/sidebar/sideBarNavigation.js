
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import NotificationIcon from '@mui/icons-material/Notifications';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';

export const navigationMenu = [

    {
        title: "Home",
        icon : <HomeIcon/>,
        path:"/"
    },
    
    {
        title: "Reels",
        icon : <ExploreIcon/>,
        path:"/reels"
    },

    
    {
        title: "Create Reels",
        icon : <ControlPointIcon/>,
        path:"/create-reels"
    },

    
    {
        title: "Notifications",
        icon : <NotificationIcon/>,
        path:"/"
    },

    
    {
        title: "Message",
        icon : <MessageIcon/>,
        path:"/messages"
    },

    
    {
        title: "List",
        icon : <ListAltIcon/>,
        path:"/"
    },
    
    {
        title: "Communities",
        icon : <GroupIcon/>,
        path:"/"
    },

    
    {
        title: "Profile",
        icon : <AccountCircleIcon/>,
        path:"/profile/2"
    }

];