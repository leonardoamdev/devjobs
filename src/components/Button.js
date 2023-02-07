import React from 'react';
import classNames from 'classnames';
import useDetectDevice from 'src/hooks/useDetectDevice';

const Component = ({ variant = 'contained', children, href, ...props }) => {
  return href ? (
    <a href={href} target="_blank" {...props}>
      {children}
    </a>
  ) : (
    <button {...props}>{children}</button>
  );
};

const Button = ({
  className = '',
  color = 'primary',
  children,
  href = '',
  isLink = false,
  variant = 'contained',
  isFull = false,
  ...rest
}) => {
  const { isTouch, isLaptop } = useDetectDevice();

  return (
    <Component
      className={classNames(className, {
        'h-12 font-kumbh-black text-base whitespace-nowrap flex justify-center items-center': true,
        'px-[35.5px]': !isTouch && !isLaptop,
        'px-3.5': isTouch || isLaptop,
        'rounded-md': variant === 'contained',
        'bg-primary hover:bg-primary-light text-white':
          variant === 'contained' && color === 'primary',
        'bg-primary/10 hover:bg-primary/30 text-primary':
          variant === 'contained' && color === 'secondary',
        'bg-transparent text-grey': variant === 'text',
        'w-full': isFull,
      })}
      variant={variant}
      href={href}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
