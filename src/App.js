import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { RouterProvider } from "react-router-dom";

import { routes } from "./Routes/Route";

export const ThemeContext = createContext(null);

function App() {
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
