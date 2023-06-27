import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

const DarkModeToggle = ({ setDarkMode, darkMode }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setDarkMode(enabled);
  }, [enabled]);

  return (
    <div className="flex gap-3 items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-[#a733ff]" : "bg-[#838383]"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke={darkMode ? "#a733ff" : "#838383"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
};

export default DarkModeToggle;
