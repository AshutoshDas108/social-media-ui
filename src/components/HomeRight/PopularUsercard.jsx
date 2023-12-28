import { Avatar, Button, Card, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PopularUsercard = () => {
  return (
    <div>
      <Card sx={{ width: 315 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              S
            </Avatar>
          }
          action={<Button size="small">Follow</Button>}
          title="Virat Kohli"
          subheader="@virat_18"
        />
      </Card>
    </div>
  );
};

export default PopularUsercard;
