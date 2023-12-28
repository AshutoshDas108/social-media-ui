import { Avatar, Grid, IconButton } from "@mui/material";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SearchUser from "../../components/searchuserChat_Message/SearchUser";
import  './Message.css'
import UserChatCard from "./UserChatCard";
import ChatMessage from "./ChatMessage";

const Message = () => {
  const handleSelectImage = () => {
    console.log("selectImage");
  };

  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid item xs={3} className="px-5">
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <WestIcon />
                <h1 className="font-bold text-xl">Home</h1>
              </div>
              <div className="h-[83vh]">
                <div className=""><SearchUser/></div>

                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                 <UserChatCard/>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        {/* right side screen */}
        <Grid item xs={9} className="h-full">
          <div className="">
            <div className="flex  justify-between items-center border-l p-5">
              <div className="flex items-center space-x-3 ">
                <Avatar src="" />
                <p>Ashutosh Das</p>
              </div>

              <div className="flex space-x-3">
                <IconButton>
                  <AddIcCallIcon />
                </IconButton>

                <IconButton>
                  <VideoCallIcon />
                </IconButton>
              </div>
            </div>

            {/* hideScrollbar will be implemented by us 
                 not a tailwind css class */}

            <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
              <ChatMessage/>
            </div>
          </div>

          {/* input part where we writw message
                should not scroll with the message so -- stickey */}
          <div className="sticky bottom-0 border-l">
            <div className="py-5 flex items-center justify-center space-x-5">
              <input
                className="bg-transparent border border-[#3b4054] rounded-full w-[85%] py-3 px-5"
                type="text"
                placeholder="Type message..."
              />

              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  className="hidden"
                  id="image-input"
                />
                {/* html for should be same as 
                        id of input */}
                <label htmlFor="image-input">
                  <AddPhotoAlternateIcon />
                </label>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
