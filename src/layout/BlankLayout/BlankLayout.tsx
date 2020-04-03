import React from 'react';
import './BlankLayout.scss';

interface BlankLayoutProps {
  children: any;
}

export const BlankLayout = ({ children }: BlankLayoutProps) => <>{children}</>;
