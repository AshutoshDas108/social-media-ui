import React from "react";
import { Card, Grid } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid className="h-screen overflow-hidden" item xs={7}>
          <img
            className="h-full max-w-full"
            src="https://cdn.pixabay.com/photo/2019/09/09/08/23/internet-4463031_1280.jpg"
            alt="NOT FOUND"
          />
        </Grid>

        <Grid item xs={5}>
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo text-center">
                  <div className="">
                    <span className="logo text-3xl font-bold">
                      Connect <InstagramIcon size="large" />{" "}
                    </span>
                  </div>
                </h1>

                <p className="text-center text-lg font-semibold text-red-600 w-[70&]">
                  Connecting Lives Sharing Stories <FavoriteIcon/>
                </p>
              </div>

              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>

              {/* <Login /> */}
              {/* <Register/> */}
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
