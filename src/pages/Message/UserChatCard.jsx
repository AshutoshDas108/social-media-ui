import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const UserChatCard = () => {
  return (
    <Card>
    <CardHeader
    
      avatar={
        <Avatar
          sx={{
            width: "3.5rem",
            height: "3.5rem",
            fontSize: "1.5rem",
            bgcolor: "#191c29",
            color: "rgb(88,199, 250)",
          }}
          src=""
        />
      }
      action={
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      }
      title="Ashutosh Das"
      subheader={"new message"}
    ></CardHeader>
    </Card>
  );
};

export default UserChatCard;
