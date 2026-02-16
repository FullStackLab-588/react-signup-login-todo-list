import { useEffect, useState } from "react";

export const TodoDateTime = () =>
{
 const [datetime , setDateTime] = useState("");

const getdatetime = () =>
{
const now = new Date();
const formatdate = now.toLocaleDateString();
const formattime = now.toLocaleTimeString();
setDateTime(`${formatdate} - ${formattime}`);
}

 useEffect(() => {
const interval = setInterval(() => {

  getdatetime();
}, 1000);

return () => clearInterval(interval);
 }, []);
return (
     <h2 className="date">{datetime}</h2>
)
}