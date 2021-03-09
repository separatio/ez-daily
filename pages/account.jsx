import Header from '../components/Header'
import { Container, Row, Button } from 'react-bootstrap'
import SignIn from '../components/account/SignIn'
import SignUp from '../components/account/SignUp'

export default function Account() {
  return (
    <Container fluid className="page">
      <Header />

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
