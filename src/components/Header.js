import React from "react";
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>MultiNote</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Screen
      </button>
    </div>
  );
};

export default Header;
