import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <h4 className={css.titleNotif}>{message}</h4>;
};
export default Notification;
