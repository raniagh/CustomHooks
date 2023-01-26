import useCounter from "../hooks/use-counter";
import Card from "./Card";

const ForwardCounter = () => {
  //A shared logic
  /* const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); */

  //Call to useCounter custom hook
  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
