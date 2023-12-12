import React, { useState } from "react";

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>disable</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleSwitchChange}
      />
    </div>
  );
};

export default SwitchButton;
