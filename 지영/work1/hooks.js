// const $app = document.querySelector("#app");
// let state;
let states = [];
let stateIdx = 0;

const useStateHook = (render) => {
  function useState(initialValue) {
    let state = states[stateIdx] || initialValue;
    let _stateIdx = stateIdx;

    const setValue = (newValue) => {
      states[_stateIdx] = newValue;
      render();
    };
    stateIdx++;
    return [states, setValue];
  }

  return { useState };
};

export default useStateHook;
