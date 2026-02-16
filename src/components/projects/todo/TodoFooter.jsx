import { useEffect, useState } from "react";
export const TodoFooter =() =>
{
    const text = "© 2026 Jhangir Mughal. Built with React.";
const [displayText, setDisplayText] = useState("");


useEffect(() => {
  let index = 0;

  const interval = setInterval(() => {
    if (index < text.length) {
      setDisplayText((prev) => prev + text.charAt(index));
      index++;
    } else {
      clearInterval(interval);
    }
  }, 80);

  return () => clearInterval(interval);
}, []);

    return (
          <h4>{displayText}</h4>
    )
}