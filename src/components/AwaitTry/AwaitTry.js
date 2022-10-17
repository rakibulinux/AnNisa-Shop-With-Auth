import React, { useState } from "react";

const AwaitTry = () => {
  const [starship, setStarship] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const clickHandler = async () => {
    setIsLoading(true);
    const res = await fetch("https://swapi.dev/api/starships/");
    const data = await res.json();
    setStarship(JSON.stringify(data, null, "\t"));
    setIsLoading(false);
  };
  let message = "";
  if (isLoading) {
    message = <p>Getting data...</p>;
  }
  return (
    <div>
      <h2>useState use case</h2>
      <h3>Getting API data and store it in state</h3>
      <button onClick={clickHandler}>Get Millennium Falcon data</button>
      <p>{message}</p>
      <pre>{starship}</pre>
    </div>
  );
};

export default AwaitTry;
