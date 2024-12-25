import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200';
  const variantStyles = {
    primary: 'bg-custom-blue-dark text-white hover:bg-custom-blue-darker',
    secondary: 'bg-white text-gray-900 border-2 border-gray-900 hover:border-custom-blue-dark hover:text-custom-blue-dark',
    outline: 'border border-custom-blue-dark text-custom-blue-dark hover:text-custom-blue-darker hover:border-custom-blue-darker',
    text: 'text-gray-100 hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;