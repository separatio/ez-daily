import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Container fluid className="page">
      <Head>
        <title>Daily Roulette</title>
      </Head>
      <Container fluid className="header">
        <h1 className="title">
          Welcome to the Daily Roulette!
          </h1>
          <p className="subtitle">Please select your preferred update sharing presentation order:</p>
      </Container>
      <Container className="content">
          <Row className="justify-content-md-between">
            <a href="http://localhost:3000">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Random</Card.Title>
                  <Card.Text>
                    Your team members, in Random order!
                  </Card.Text>
                  {/* <Button variant="primary" href="https://nextjs.org/docs">
                    More &rarr;
                  </Button> */}
                </Card.Body>
              </Card>
            </a>
            <a href="http://localhost:3000">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>As-is</Card.Title>
                  <Card.Text>
                    Use a custom order for the team members!
                  </Card.Text>
                  {/* <Button variant="primary" href="https://nextjs.org/learn">
                    More &rarr;
                  </Button> */}
                </Card.Body>
              </Card>
            </a>
          </Row>
          <Row className="justify-content-md-between">
            <a href="http://localhost:3000">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Alphabetical</Card.Title>
                  <Card.Text>
                    This is self-explanatory, right?
                  </Card.Text>
                  {/* <Button
                    variant="primary"
                    href="https://github.com/vercel/next.js/tree/master/examples"
                  >
                    More &rarr;
                  </Button> */}
                </Card.Body>
              </Card>
            </a>

            <a href="http://localhost:3000">
              <Card className="sml-card">
                <Card.Body>
                  <Card.Title>Reverse Alphabetical</Card.Title>
                  <Card.Text>
                    Play the Roulette in Reverse!
                  </Card.Text>
                  {/* <Button
                    variant="primary"
                    href="https://vercel.com/new?utm_source=github&utm_medium=example&utm_campaign=next-example"
                  >
                    More &rarr;
                  </Button> */}
                </Card.Body>
              </Card>
            </a>
          </Row>
      </Container>

      <footer className="cntr-footer"></footer>
    </Container>
  )
}
