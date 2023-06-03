import React from "react";
import Avatar from "../components/Avatar";

const Contact = ({ id, username, onClick, selected, online }) => {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        "border-b border-gray-100 gap-2 cursor-pointer " +
        (selected ? "bg-blue-100" : "")
      }
    >
      <div className="flex gap-2 py-2 pl-4 items-center">
        <Avatar online={online} username={username} userId={id} />
        <span className="text-gray-800 capitalize">{username}</span>
      </div>
    </div>
  );
};

export default Contact;
