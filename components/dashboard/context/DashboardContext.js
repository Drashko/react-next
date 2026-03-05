import { createContext, useMemo, useState } from 'react';

export const DashboardContext = createContext({
  passwordVisible: false,
  togglePasswordVisibility: () => {},
});

export function AppProvider({ children }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const value = useMemo(
    () => ({
      passwordVisible,
      togglePasswordVisibility: () => setPasswordVisible((visible) => !visible),
    }),
    [passwordVisible]
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
