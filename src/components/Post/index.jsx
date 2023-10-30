import PropTypes from "prop-types";

export const Post = (props) => {
  return (
    <>
      <h1>{props.author}</h1>
      <p>{props.content}</p>
    </>
  );
};

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
