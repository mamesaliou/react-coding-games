import React from "react";
import UserInfo from "./UserInfo";
function UserInfoWithTitle({ title, user }) {
    return (
        <div>
            <div>{title}</div>
            <UserInfo user={user} />
        </div>
    );
}


export default UserInfoWithTitle;
