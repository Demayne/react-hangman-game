/**
 * Button.jsx
 * Reusable button component
 * Provides consistent button styling across the application
 */

import React from 'react';

/**
 * Button component
 * Reusable button with consistent styling
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler function
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {string} props.variant - Button variant (primary, secondary, etc.)
 * @param {Object} props.style - Additional inline styles
 */
export default function Button({ 
  children, 
  onClick, 
  disabled = false, 
  variant = 'primary', 
  style = {} 
}) {
  const baseStyle = {
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #bbb',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    ...style
  };

  const variantStyles = {
    primary: { background: '#007bff', color: '#fff', borderColor: '#007bff' },
    secondary: { background: '#6c757d', color: '#fff', borderColor: '#6c757d' },
    success: { background: '#28a745', color: '#fff', borderColor: '#28a745' },
    danger: { background: '#dc3545', color: '#fff', borderColor: '#dc3545' }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ ...baseStyle, ...variantStyles[variant] }}
    >
      {children}
    </button>
  );
}
