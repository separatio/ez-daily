// Keeping this page as a future reference at the moment

function SignInForm() {
  return (
    <Accordion>
      <Accordion.Toggle
        as={Button}
        variant="primary"
        eventKey="0"
      >
          Sign In
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="0">
        <Card.Body>
            This needs to be replaced with a sign in form
        </Card.Body>
      </Accordion.Collapse>
    </Accordion>
  );
}

export default SignInForm;
