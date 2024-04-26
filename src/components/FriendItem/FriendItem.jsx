// import clsx from "clsx";
// import css from "./FriendItem.module.css";

export default function FriendItem({
  friend: { avatar, name, isOnline },
}) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline === true ? "Online" : "Offline"}</p>
    </div>
  );
}
