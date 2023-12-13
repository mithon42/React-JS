import React from "react";
import Counter from "../../components/useState/Counter";
import InputField from "../../components/useState/InputField";
import ToggleButton from "../../components/useState/ToggleButton";
import ListRendering from "../../components/useState/ListRendering";
import ColorChange from "../../components/useState/ColorChange";
import TodoList from "../../components/useState/ToDoList";
import SimpleForm from "../../components/useState/SimpleForm";
import DataFetching from "../../components/useState/DataFetching";
import TodoListProject from "../../components/useState/TodoListProject";

// Use Effect
import UseEffect from "../../components/useEffect/useEffect";
import SimpleExample from "../../components/useEffect/SimpleExample";

const About = () => {
  return (
    <>
      <Counter />
      <InputField />
      <ToggleButton />
      <ListRendering />
      <ColorChange />
      <TodoList />
      <SimpleForm />
      <DataFetching />
      <TodoListProject />

      {/* Use Effect */}
      <UseEffect />
      <SimpleExample />
    </>
  );
};

export default About;
