import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/post/PostCard";
import UserReelsCard from "../components/Reels/UserReelsCard";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModel";

const tabs = [
  { value: "posts", name: "Posts" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Reposts" },
];
//dummy posts
//const posts = [1, 1, 1, 1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const saved = [1, 1, 1, 1, 1, 1, 1, 1];
const reposts = [1, 1, 1, 1, 1, 1, 1];

const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = useState("posts");
  const { auth } = useSelector(store => store);
  const { post } = useSelector(store => store);
  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModel = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className="py-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[12rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>

        <div className="px-5 flex justify-between item-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-16"
            sx={{ width: "8rem", height: "8rem" }}
            src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600"
          />

          {true ? (
            <Button
              sx={{ borderRadius: "20px", width: "10rem", height: "3rem" }}
              variant="outlined"
              onClick={handleOpenProfileModel}
            >
              Edit Profile
            </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>
        <div className="p-4 ">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth.user?.firstName + " " + auth.user?.lastName}
            </h1>
            <p>
              @
              {auth.user?.firstName.toLowerCase() +
                "_" +
                auth.user?.lastName.toLowerCase()}
            </p>
          </div>

          <div className="flex gap-6 items-center py-3">
            <span>41 posts</span>
            <span>48 Followes</span>
            <span>52 Following</span>
          </div>

          {/* Users BIO */}
          <div>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "driver" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => {
                return <Tab value={item.value} label={item.name} wrapped />;
              })}
            </Tabs>
          </Box>
        {
          <div className="flex justify-center">
            {value === "posts" ? (
              <Card className="space-y-2 my-10 w-[80%]">
                {post.posts.map((item) => {
                  return (
                    <span className="border border-slate-100 rounded-md">
                      <PostCard item={item} />
                    </span>
                  );
                })}
              </Card>
            ) : value === "reels" ? (
              <div className="flex justify-center flex-wrap gap-4 space-y-3">
                {reels.map((item) => (
                  <UserReelsCard />
                ))}
              </div>
            ) : value === "saved" ? (
              <Card className="space-y-5 my-10 w-[80%]">
                {saved.map((item) => {
                  return (
                    <div className="border border-slate-100 rounded-md">
                      <PostCard />
                    </div>
                  );
                })}
              </Card>
            ) : value === "repost" ? (
              <Card className="space-y-5 my-10 w-[80%]">
                {reposts.map((item) => {
                  return (
                    <div className="border border-slate-100 rounded-md">
                      <PostCard />
                    </div>
                  );
                })}
              </Card>
            ) : null}
          </div>
        }
        </section>
      </div>

      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;
