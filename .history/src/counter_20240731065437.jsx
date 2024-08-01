import { useState } from "react";

const [currValue, setValue] = useState(0);

const number = [1, 2, 3, 4, 5];

const counter = () => {
  const result = number.reduce((acc, item) => {
    return acc + (item % 2 == 0 ? 2 : 3);
  }, currValue);
  setValue(result);
};

const counterDown = () => {
  const result = number.reduce((acc, item) => {
    return acc + (item % 2 == 0 ? 2 : 3);
  }, 0);

  setValue(currValue === 0 ? 0 : currValue - result);
};

export 
