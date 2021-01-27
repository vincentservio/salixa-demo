import React from "react";
import {Hours} from "./Hours";
import {Contact} from "./Contact";
import {Makeup} from "./Makeup";
import React, {useState} from "react";

export const Information = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div class="container">
      <Hours />
      <Makeup />
      <Contact />
    </div>
  );
};
