'use client';

import { useContext } from 'react';
import { DashboardContext } from '../dashboard/context/DashboardContext';

const fallbackContext = {
  passwordVisible: false,
  togglePasswordVisibility: () => {},
};

export default function LoginContent() {
  const email = '';
  const password = '';
  const { passwordVisible, togglePasswordVisibility } = useContext(DashboardContext) ?? fallbackContext;

  return (
    <div className="main-content login-panel">
      <div className="login-body">
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" defaultValue={email} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type={passwordVisible ? 'text' : 'password'} defaultValue={password} />
        </div>
        <button type="button" onClick={togglePasswordVisibility}>
          {passwordVisible ? 'Hide Password' : 'Show Password'}
        </button>
      </div>
    </div>
  );
}
