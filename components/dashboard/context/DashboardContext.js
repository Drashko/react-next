'use client';

import { createContext, useMemo, useState } from 'react';

const defaultNavState = {
  isSmall: false,
  reset: false,
  hoverOpen: false,
  hover: false,
};

const defaultLayoutPosition = {
  horizontal: false,
  twoColumn: false,
  flush: false,
};

export const DashboardContext = createContext({
  passwordVisible: false,
  togglePasswordVisibility: () => {},
  isExpanded: false,
  layoutPosition: defaultLayoutPosition,
  backgroundImageStyle: {},
  isNavExpanded: defaultNavState,
  isRtl: false,
  isSmallScreen: false,
});

export function AppProvider({ children }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const value = useMemo(
    () => ({
      passwordVisible,
      togglePasswordVisibility: () => setPasswordVisible((visible) => !visible),
      isExpanded: false,
      layoutPosition: defaultLayoutPosition,
      backgroundImageStyle: {},
      isNavExpanded: defaultNavState,
      isRtl: false,
      isSmallScreen: false,
    }),
    [passwordVisible]
  );

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
