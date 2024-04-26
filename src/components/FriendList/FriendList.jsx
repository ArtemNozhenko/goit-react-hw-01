import FriendItem from "../FriendItem/FriendItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
