import React from "react";

export const ContainerRetro = ({ children }) => {
  return (
    <div className="min-h-screen bg-grid flex flex-col items-center justify-start p-6">
      <div className="max-w-5xl w-full">{children}</div>
    </div>
  );
};
