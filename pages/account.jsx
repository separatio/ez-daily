import Head from 'next/head'
import { Container, Row, Button } from 'react-bootstrap'
import SignIn from '../components/account/SignIn'
import SignUp from '../components/account/SignUp'

export default function Account() {
  return (
    <Container fluid className="page">
      <Head>
        <title>Daily Facilitator</title>
      </Head>
      <Container fluid className="header">
        <h1 className="title">
          Welcome to the Daily Roulette!
        </h1>
      </Container>

      <Container className="content">
          <Row className="justify-content-md-between">
            <SignIn />
            <SignUp />
          </Row>
      </Container>

      <footer className="cntr-footer"></footer>
    </Container>
  )
}
