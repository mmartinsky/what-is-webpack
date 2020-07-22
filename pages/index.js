import Link from "next/link";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  text-align: center;
`;

function HomePage() {
  return (
    <Container>
      <h1>What is Webpack?</h1>
      <h2>
        An illustrated walkthrough of bundlers and the modern JS ecosystem
      </h2>
      <div>
        <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e4c48715-874f-447a-a915-c4615f7f1123/webpack-js-opt.png" />
      </div>
      <Link href="step/1">
        <Button variant="contained" color="primary">
          Begin
        </Button>
      </Link>
    </Container>
  );
}

export default HomePage;
