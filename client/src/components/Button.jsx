import React from 'react';
import PropTypes from 'prop-types';

function Button({ icon, text, isSubmit }) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className="flex items-center py-2 px-4 bg-[#181818] text-white text-xl rounded-lg my-2 mx-auto font-semibold"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
}

Button.defaultProps = {
  isSubmit: false,
};

Button.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  isSubmit: PropTypes.bool,
};

export default Button;
