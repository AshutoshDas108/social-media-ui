import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { uploadToCloudniry } from "../../Utils/uploadToCloudniry";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../redux/Post/post.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",
};

const CreatePostModel = ({ handleClose, open }) => {
  const [selectedImage, setSelectedImage] = useState();

  const [selectedVideos, setSelectedVideos] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    const imageUrl = await uploadToCloudniry(event.target.files[0], "image");
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imageUrl);
  };

  const handleSelectVideo = async (event) => {
    setIsLoading(true);
    const videoUrl = await uploadToCloudniry(event.target.files[0], "video");
    setSelectedVideos(videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video", videoUrl);
  };

  const {auth} = useSelector(store => store)

  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(createPostAction(values));
    },
  });


  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className="flex space-x-4 items-center">
                <Avatar />
                <div>
                  <p className="font-bold text-lg">{auth.user?.firstName +" "+ auth.user?.lastName}</p>
                  <p className="text-sm">@{auth.user?.firstName.toLowerCase() +"_"+ auth.user?.lastName.toLowerCase()}</p>
                </div>
              </div>
              <textarea
                className="outline-none w-full mt-5 p-2 bg-transparent
                 border border-[#3b4054] rounded-sm"
                placeholder="write caption ..."
                name="caption"
                id=""
                rows={4}
                value={formik.values.caption}
                onChange={formik.handleChange}
              ></textarea>

              <div className="flex space-x-5 items-center mt-5">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSelectImage}
                    style={{ display: "none" }}
                    id="image-input"
                  />

                  <label htmlFor="image-input">
                    <IconButton color="primary" component="span">
                      <ImageIcon />
                    </IconButton>
                  </label>

                  <span>Image</span>
                </div>

                <div>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleSelectVideo}
                    style={{ display: "none" }}
                    id="video-input"
                  />

                  <label htmlFor="video-input">
                    <IconButton color="primary">
                      <VideoCallIcon />
                    </IconButton>
                  </label>

                  <span>Video</span>
                </div>

                {selectedImage && (
                  <div>
                    <img src={selectedImage} alt="" className="h-[10rem]" />
                  </div>
                )}

                {selectedVideos && (
                  <div>
                    <img src={selectedVideos} alt="" className="h-[10rem]" />
                  </div>
                )}

                <div className="flex w-full justify-end">
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ borderRadius: "1.5rem" }}
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </form>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Modal>
    </div>
  );
};

export default CreatePostModel;
