import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats,
}) {
  return (
    <div className={css.container}>
      <div className={css.user}>
        <img
          className={css.images}
          src={image}
          alt="User avatar"
        />
        <p className={css.textName}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
