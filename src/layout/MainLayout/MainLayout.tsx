import React from 'react';
import './MainLayout.scss';

interface MainLayoutProps {
  children: any;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="main-container">
    <div className="header">Header</div>
    <div className="content">{children}</div>
    <div className="footer">Footer</div>
  </div>
);
