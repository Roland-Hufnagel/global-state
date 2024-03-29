import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export default function CounterList({ animals, handleAdd, handleSubtract }) {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h2>Counters</h2>
      <List>
        {animals.map((animal) => (
          <li key={animal.id}>
            <Counter
              animal={animal}
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
            />
          </li>
        ))}
        {/* <Counter animalName={"Cats"} />
        <Counter animalName={"Dogs"} />
        <Counter animalName={"Sheep"} />
        <Counter animalName={"Dragons"} /> */}
      </List>
    </div>
  );
}
