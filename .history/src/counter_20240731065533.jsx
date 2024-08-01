import React, { useState } from "react";

class Counter extends React.Component{
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
}

export default 
