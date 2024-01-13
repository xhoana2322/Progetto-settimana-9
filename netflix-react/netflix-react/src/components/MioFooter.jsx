import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function MioFooter() {
  return (
    <Container>
          <Row className="text-center mt-5">
            <Col className="col-6 offset-3">
 
              <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4 lh-1">
                <Col>
                  <Row>
                    <Col className="col-12 footer-links">
                      <p>
                        <a href="#" alt="footer link"  className='a1 text-secondary text-decoration-none'>Audio and Subtitles</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link"  className='text-secondary text-decoration-none'>Media Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link"  className='text-secondary text-decoration-none'>Privacy</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link"  className='text-secondary text-decoration-none'>Contact us</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="col-12 footer-links">
                      <p>
                        <a href="#" alt="footer link" className='text-secondary text-decoration-none'>Audio Description</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link" className='text-secondary text-decoration-none'>Investor Relations</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link" className='text-secondary text-decoration-none'>Legal Notices</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="col-12 footer-links">
                      <p>
                        <a href="#" alt="footer link" className='text-secondary text-decoration-none'>Help Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link" className='text-secondary text-decoration-none'>Jobs</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link" className='text-secondary text-decoration-none'>Cookie Preferences</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="col-12 footer-links">
                      <p>
                        <a href="#" alt="footer link" className='text-secondary text-decoration-none'>Gift Cards</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link" className='text-secondary text-decoration-none'>Terms of Use</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link" className='aCorp text-secondary text-decoration-none'>Corporate Information</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className='d-flex flex-column align-items-start'>
                <Row>
                  <Col className="col-12 text-left mb-2">
                    <Button
                      type="button"
                      className="btn btn-sm footer-button rounded-0 mt-3 text-secondary border-secondary"
                    >
                      Service Code
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col className="copyright col-12 text-left mb-2 mt-2 copyright text-secondary">
                    © 1997-2022 Netflix, Inc.
                  </Col>
                </Row>
              </div>
              
            </Col>
          </Row>
    </Container>
  )
}
