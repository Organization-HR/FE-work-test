import tw from "twin.macro";
import Calculator from "./components/calculator";

const App = () => {
  return (
    <Wrapper>
      <Calculator />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex items-center justify-center md:h-screen
`;

export default App;
