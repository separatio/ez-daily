import Header from '../components/Header'
import { Container, Row, Button } from 'react-bootstrap'

export default function Account() {
  return (
    <Container fluid className="page">
      <Header />

      <Container className="content">
          <Row className="justify-content-md-between">
            {/*
            The account page will be left empty up until
            login with Gmail and Github will be implemented
            <SignIn />
            <SignUp /> */}
          </Row>
      </Container>

      <footer className="cntr-footer"></footer>
    </Container>
  )
}
