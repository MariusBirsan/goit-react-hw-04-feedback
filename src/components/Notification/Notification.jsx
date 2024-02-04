import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return message && <p className={styles.p}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
