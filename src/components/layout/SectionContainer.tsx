import React from 'react';

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 ${className}`.trim()}
    >
      {children}
    </div>
  );
};
