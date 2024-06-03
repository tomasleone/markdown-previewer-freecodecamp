import './App.css';
import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(`# Bienvenido a mi previsualizador de Markdown!
## Este es un subtítulo
[Este es un enlace](https://freecodecamp.org)

\`Código en línea\`

\`\`\`
Bloque de código
\`\`\`

- Lista
- de
- elementos

> Cita en bloque

![Logo de FreeCodeCamp](https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/freecodecamp-512.png)

**Texto en negrita**
`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const renderer = new marked.Renderer();
  renderer.image = (href, title, text) => {
    return `<img src="${href}" alt="${text}" class="small-image"/>`;
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="text-center">Previsualizador de Markdown</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Editor</Form.Label>
            <Form.Control
              as="textarea"
              id="editor"
              rows={10}
              value={markdown}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Vista previa</Form.Label>
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(markdown, { renderer }) }}
              className="border p-3"
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

