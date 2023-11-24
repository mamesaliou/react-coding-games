import React from "react";
import UserInfoWithTitle from "./UserInfoWithTitle";
// Update Page and UserInfoWithTitle
function Page({ user }) {
    return (
        <div>
            <UserInfoWithTitle title="User Info" user={user} />
        </div>
    );
}

export default Page
