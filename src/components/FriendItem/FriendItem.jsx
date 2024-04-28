import clsx from "clsx";
import css from "./FriendItem.module.css";

export default function FriendItem({
  friend: { avatar, name, isOnline },
}) {
  const statusClass = clsx(
    isOnline === true ? css.active : css.retired
  );

  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
}
