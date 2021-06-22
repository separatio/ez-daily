import Header from '../components/Header';
import {Container, Row} from 'react-bootstrap';

export default function Page() {
  return (
    <Container
      fluid
      className="page"
    >
      <Header />

      <Container className="content">
        <Row className="justify-content-md-between" />
      </Container>
    </Container>
  );
}
