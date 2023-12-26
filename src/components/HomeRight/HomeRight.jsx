import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import PopularUsercard from "./PopularUsercard";
import { Card } from "@mui/material";

const users = [1, 1, 1, 1];

const HomeRight = () => {
  return (
    <div className="pr-5">
      <Card sx={{ width: 315 }}>
        <SearchUser />
        <div className="flex justify-between py-5 items-center">
          <p className="px-4 font-sm justify-center opacity-70">
            Suggestions for You
          </p>

          <p className="mr-4 font-sm text-xs opacity-95">View All</p>
        </div>
        <div className="space-y-5">
          {users.map((user) => 
            <PopularUsercard/>
        )}
        </div>
      </Card>
    </div>
  );
};

export default HomeRight;
