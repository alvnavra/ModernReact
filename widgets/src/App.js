import React, { useState } from "react";
//import Accordion from "./components/Accordion";
//import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

/*const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among the engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React creating components",
  },
];*/

const options = [
  { label: "The color Red", value: "red" },
  { label: "The color Green", value: "green" },
  { label: "A shade of blue", value: "blue" },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
