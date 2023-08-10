import { useState, useContext, createContext } from "react";

export const NavContext = createContext({
  active: false,
  setActive: (prevState) => !prevState,
});

export const NavProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const value = { active, setActive };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
