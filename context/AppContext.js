import { createContext, useMemo, useState } from 'react';

export const AppContext = createContext({
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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
