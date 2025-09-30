/**
 * MainLayout.jsx
 * Main layout component for the application
 * Provides consistent layout structure across pages
 */

import React from 'react';

/**
 * MainLayout component
 * Wrapper component for consistent page layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 */
export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      {children}
    </div>
  );
}

