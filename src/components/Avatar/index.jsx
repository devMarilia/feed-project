import PropTypes from "prop-types";

import styles from "./Avatar.module.css";

export const Avatar = ({hasBorder = true, src}) => {

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="avatar"
    />
  );
};
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};
