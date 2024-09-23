import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.username}>{name}</p>
      <p
        className={clsx(styles.status, {
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;
