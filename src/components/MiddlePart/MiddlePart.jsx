import { Avatar, Card, IconButton, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import PostCard from "../post/PostCard";
import CreatePostModel from "../CreatePost/CreatePostModel";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../redux/Post/post.action";
import { GET_ALL_POST_SUCCESS } from "../../redux/Post/post.actionType";
//import { GET_ALL_POST_SUCCESS } from "../../redux/Post/post.actionType";

const story = [1, 1, 1, 1, 1];
//const dummyPosts = [1, 1, 1, 1, 1];


const MiddlePart = () => {

  //dispatch action here
const dispatch = useDispatch();

const {post} = useSelector(store=>store)

console.log("post store", post)

  const [openCreatePostModel , setOpenCreatePostModel] = useState(false);

  const handleCloseCreatePostModel = () => {

    setOpenCreatePostModel(false);

  };

  const handleOpenCreatePostModel = () => {
    console.log("Post model opened");
    setOpenCreatePostModel(true);
  };

  //const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   dispatch(getAllPostAction());
  // }, []);

  useEffect(() => {
    dispatch(getAllPostAction());
  }, [post.newcomment]);

  // useEffect(()=>{
  //   const postsFromLocalStorage = localStorage.getItem("posts");
  //   if (postsFromLocalStorage) {
  //     dispatch({ type: GET_ALL_POST_SUCCESS, payload: JSON.parse(postsFromLocalStorage) });
  //     //setIsLoading(false);
  //   } 
  //     dispatch(getAllPostAction());
  //   },
  //  [])

  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md ">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "4rem", height: "4rem" }}>
            <AddIcon sx={{ fontSize: "2rem" }} />
          </Avatar>
          <p>New</p>
        </div>

        {story.map((item) => {
          return <StoryCircle />;
        })}
      </section>

      <Card className="p-5 mt-5 ">
        <div className="flex justify-between">
          <Avatar src="" />
          <Input
           onClick={handleOpenCreatePostModel}
            readOnly
            className="outline-none w-[90%] rounded-full px-5 
                             bg-transparent border border-gray-700"
            type="text"
            disableUnderline={true}
          ></Input>
        </div>

        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ImageIcon />
            </IconButton>

            <span>Media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <VideocamIcon />
            </IconButton>

            <span>Media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModel}>
              <ArticleIcon />
            </IconButton>

            <span>Media</span>
          </div>
        </div>
      </Card>
      <div className="mt-5 space-y-5">


        {console.log(post.posts.length)}
        {/* {console.log(post.post.length)} */}

        {post.posts.slice(0).reverse().map((item)=><PostCard item={item}/>)}


        {/* {isLoading ? (
          <p>Loading...</p>
        ) : (
          post.posts.map((item) => {
            return(
              <PostCard item={item}/>
            )
          })
        )} */}

      </div>
      <div>
        <CreatePostModel handleClose={handleCloseCreatePostModel} open={openCreatePostModel}/>
      </div>
    </div>
  );
};

export default MiddlePart;
