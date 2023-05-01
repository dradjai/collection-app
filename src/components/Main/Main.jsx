import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Main() {

  return(
    <main>
      <Container>
        <Row>
          <Col>
            <h1>Gallery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem quod enim. Eum at tempore cum asperiores consectetur velit atque similique error harum, veniam, debitis perspiciatis? Quibusdam incidunt atque ex?</p>
            <HashLink to="/#gallery"><Button>See Gallery</Button></HashLink>
          </Col>
        </Row>
      </Container>
  

    </main>
  )
}