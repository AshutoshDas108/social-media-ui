import {
  Avatar,
  Backdrop,
  CircularProgress,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import WestIcon from "@mui/icons-material/West";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SearchUser from "../../components/searchuserChat_Message/SearchUser";
import "./Message.css";
import UserChatCard from "./UserChatCard";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  createMessageAction,
  getAllChatsAction,
} from "../../redux/Message/message.action";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { uploadToCloudniry } from "../../Utils/uploadToCloudniry";

const Message = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const { message, auth } = useSelector((store) => store);

  const [currentChat, setCurrentChat] = useState();

  const [messages, setMessages] = useState([]);

  const [selectedImage, setSelectedImage] = useState();

  const [loading, setLoading] = useState(false);

  //automatic scrolling down to the newer messages
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
 
  useEffect(() => {
    dispatch(getAllChatsAction());
  }, []);

  console.log("chats", message.chats);

  const handleSelectImage = async (e) => {
    console.log("selectImage");
    const imageUrl = await uploadToCloudniry(e.target.files[0], "image");
    setSelectedImage(imageUrl);
    setLoading(false);
  };

  const handleCreateMessage = (values) => {
    const message = {
      chatId: currentChat?.id,
      content: values,
      image: selectedImage,
    };
    dispatch(createMessageAction(message));
    setInputValue("");
  };

  const handleLoading = ()=> setLoading(true);

  useEffect(() => {
    setMessages([...messages, message.message]);
  }, [message.message]);

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
                <div className="">
                  <SearchUser />
                </div>

                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                  {message.chats.map((item) => {
                    return (
                      <div
                        onClick={() => {
                          setCurrentChat(item);
                          //setLoading(true);
                          setMessages(item.messages);
                        }}
                      >
                        <UserChatCard chat={item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Grid>

        {/* right side screen */}
        <Grid item xs={9} className="h-full">
          {currentChat ? (
            <div className="">
              <div className="flex  justify-between items-center border-l p-5">
                <div className="flex items-center space-x-3 ">
                  <Avatar src="" />
                  <p className="text-xl font-semibold">
                    {auth.user.id === currentChat.users[0].id
                      ? currentChat.users[1].firstName +
                        " " +
                        currentChat.users[1].lastName
                      : currentChat.users[0].firstName +
                        " " +
                        currentChat.users[0].lastName}
                  </p>
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
                {messages?.map((item, index) => (
                  <div ref={index === messages.length - 1 ? lastMessageRef : null}>
                  <ChatMessage key={index} item={item} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
              <ChatBubbleOutlineIcon sx={{ fontSize: "15rem" }} />
              <p className="text-xl font-semibold">No Chat Selected</p>
            </div>
          )}

          {/* input part where we writw message
                should not scroll with the message so -- stickey */}
          <div className="sticky bottom-0 border-l">
          {selectedImage && <img onClick={handleLoading}
          className="w-[5rem] h-[5rem] object-cover px-2"
              src={selectedImage} alt=" "/>}
            <div className="py-5 flex items-center justify-center space-x-5">

           
              <input
                onKeyPress={(e) => {
                  if (e.key === "Enter" && e.target.value) {
                    handleCreateMessage(e.target.value);
                    setSelectedImage("")
                  }
                }}
                onChange={
                  (e) => setInputValue(e.target.value) // update the input value when it changes
                }
                value={inputValue} // set the input value from the state
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
      <Backdrop
        sx={{ color: "", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Message;
