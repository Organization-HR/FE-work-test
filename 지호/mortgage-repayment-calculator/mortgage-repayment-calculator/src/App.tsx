import tw from "twin.macro";
import Result from "./components/calculator/result";
import Calculator from "./components/calculator/calculator";

const App = () => {
  return (
    <>
      <Test>Test Div</Test>
      <Calculator />
      <Result />
    </>
  );
};

const Test = tw.div`
  bg-red-500
`;

export default App;
