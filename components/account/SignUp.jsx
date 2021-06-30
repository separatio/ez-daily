// Keeping this page as a future reference at the moment

function SignUpForm() {
  return (
    <Accordion>
      <Accordion.Toggle
        as={Button}
        variant="primary"
        eventKey="0"
      >
          Sign Up
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="0">
        <Card.Body>
            This needs to be replaced with a Sign Up form
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  );
}

export default SignUpForm;
