import Head from 'next/head';
import {Container} from 'react-bootstrap';

export default function Header({
  title = 'Daily Facilitator',
}) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
