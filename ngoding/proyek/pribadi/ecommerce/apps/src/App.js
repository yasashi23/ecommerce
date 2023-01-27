import styled from "styled-components"
import Table from "./comp/table";

function App() {
  return (
    <Container>
      <h1>Hello World</h1>
      <Table/>
    </Container>
  );
}

const Container = styled.div`
color:red;


`

export default App;
