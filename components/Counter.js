import styled from "styled-components";
//import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnimalName = styled.strong`
  width: 5rem;
`;

export default function Counter({ animal, handleAdd, handleSubtract }) {
  // const [count, setCount] = useState(0);

  // function handleAdd() {
  //   setCount(count + 1);
  // }

  // function handleSubtract() {
  //   setCount(Math.max(0, count - 1));
  // }

  return (
    <Container style={{ backgroundColor: "cornflowerblue" }}>
      <AnimalName>{animal.name}:</AnimalName>
      <button type="button" onClick={() => handleSubtract(animal.id)}>
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{animal.count}</span>
      <button type="button" onClick={() => handleAdd(animal.id)}>
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </Container>
  );
}
