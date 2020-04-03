import React from 'react';
import './ErrorLayout.scss';

interface ErrorLayoutProps {
  children: any;
}

export const ErrorLayout = ({ children }: ErrorLayoutProps) => (
  <div className="error-container">
    <h1>Error</h1>
    <div className="content">{children}</div>
  </div>
);
