import { useEffect, useState } from "react";

//Custom hook share only logic and not the state
//forwards = true means + operation
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [forwards]);

  //A custom hook can return whatever we want : any type (object, number, array,..)
  return counter;
};
export default useCounter;
