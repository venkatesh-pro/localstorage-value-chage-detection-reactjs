import React, { useEffect, useState } from "react";

const index = () => {
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    window.addEventListener("storage", (e) => {
      console.log(e);
      if (e.key == "login") {
        const oldValue = e.oldValue;
        const newValue = e.newValue;

        if (oldValue != newValue) {
          console.log("Changed");
          setIsChanged(true);
        } else {
          console.log("Not Changed");
          setIsChanged(false);
        }
      }
    });
  }, []);
  return (
    <>
      <p>Is Local storage is changed with login Key ? </p>
      <span>
        <pre>{JSON.stringify(isChanged)}</pre>
      </span>
    </>
  );
};

export default index;
