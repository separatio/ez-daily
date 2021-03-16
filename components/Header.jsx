import Head from 'next/head';
import {Container} from 'react-bootstrap';

function Header() {
  return (
    <Container>
      <Head>
        <title>
            Daily Facilitator
        </title>
      </Head>

      <Container
        fluid
        className="header"
      >
        <h1 className="title">
            Welcome to the Daily Roulette!
        </h1>

        <p className="subtitle">
            Please select your preferred update sharing presentation order:
        </p>
      </Container>
    </Container>
  );
}

export default Header;
