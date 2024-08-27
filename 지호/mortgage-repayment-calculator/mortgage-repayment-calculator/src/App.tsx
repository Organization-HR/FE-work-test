import "./App.css";
import tw from "twin.macro";

const App = () => {
  return (
    <>
      <Test>Test Div</Test>
    </>
  );
};

const Test = tw.div`
  bg-red-500
`;

export default App;
