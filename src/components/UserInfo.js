import React from "react";

// Do not change the UserInfo component
function UserInfo({ user }) {
    return (
        <div>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
        </div>
    );
}

export default UserInfo;
