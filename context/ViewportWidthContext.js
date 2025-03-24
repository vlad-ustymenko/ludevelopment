"use client";
import { createContext, useContext, useState } from "react";

const ViewportWidthContext = createContext();

export const ViewportWidthProvider = ({ children }) => {
  const [viewportWidth, setViewportWidth] = useState(1920);

  return (
    <ViewportWidthContext.Provider value={{ viewportWidth, setViewportWidth }}>
      {children}
    </ViewportWidthContext.Provider>
  );
};

export const useViewportWidthContext = () => useContext(ViewportWidthContext);
