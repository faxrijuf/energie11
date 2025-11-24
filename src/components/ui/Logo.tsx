import React from 'react';
import logoPng from '../../assets/LOGOLINE2 copy.png';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Logo: React.FC<LogoProps> = React.memo(({ size, className = '' }) => {
  const sizeStyles = {
    small: 'h-8',
    medium: 'h-10',
    large: 'h-12'
  };

  const sizeClass = size ? sizeStyles[size] : '';

  return (
    <img
      src={logoPng}
      alt="Énergie studio"
      className={`w-auto object-contain ${sizeClass} ${className}`}
      loading="eager"
      decoding="async"
    />
  );
});
