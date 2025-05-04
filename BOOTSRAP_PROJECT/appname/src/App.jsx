import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import "./index.css";
import "./App.css"
import ListGroup from "react-bootstrap/ListGroup";

import Img1 from "./IMAGES/Interior.jpg";
import Img2 from "./IMAGES/gothic_cathedral_interior-wallpaper-2880x1800.jpg";
import Img3 from "./IMAGES/identical_skyscrapers-wallpaper-2880x1200.jpg";
import Img4 from "./IMAGES/StockCake-Interactive Home Display_1743758341.jpg";
import Img5 from "./IMAGES/spherical_building_architecture-wallpaper-2880x1200.jpg";
import Img6 from "./IMAGES/StockCake-Victorian Storefront Row_1743702357.jpg";
import img7 from "./IMAGES/StockCake-Future Home Concept_1743758312.jpg";
import Img8 from "./IMAGES/StockCake-Isometric House Duo_1743757908.jpg";
import Img9 from "./IMAGES/StockCake-Smart Home Control_1743758842.jpg";
import Img10 from "./IMAGES/StockCake-Smart Home Illustration_1743758881.jpg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";




function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#fff",color:"black" }}
        className=" shadow-lg py-3 fixed-top"
      >
        <Container fluid >
          <Navbar.Brand
            href="#"
            className="text-danger fw-normal fs-4 ms-3 text-uppercase"
            style={{ fontFamily: "Arial, sans-serif " }}
          >
            Architecture
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-primary text-light"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="fs-5 text-warning"
              >
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  href="#home"
                  className="text-danger  mx-3 fs-5 nav-link-custom"
                style={{textDecoration:"underline"}}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#about"
                  className=" mx-3 fs-5 nav-link-custom"
                >
                  About
                </Nav.Link>

                <NavDropdown
                  title="Services"
                  id="offcanvasNavbarDropdown"
                  className="mx-3  fs-5 nav-link-custom"
                  style={{ textDecoration: "none",color:"white" }}
                >
                  <NavDropdown.Item href="#web" className="text-dark">
                    Modern
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#app" className="text-dark">
                  Futuristic
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#seo" className="text-dark">
                  Classical
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  href="#contact"
                  className=" mx-3 fs-5 nav-link-custom"
                >
                  Contact
                </Nav.Link>
              </Nav>

              <Form className="d-flex mt-3 mt-lg-0">
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="me-2 rounded-pill px-3 border-0"
                  style={{ width: "250px" }}
                />
                <Button variant="danger" className="rounded-pill px-4 fw-bold">
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Full-Screen Layout: Navbar + Carousel */}
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Carousel Container (Subtract Navbar height) */}
        <div style={{ flex: "1", marginTop: "56px" }}>
          <Carousel className="h-100">
            <Carousel.Item>
              <img
                src={Img5}
                className="d-block w-100 h-100 object-fit-cover"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 style={{ color: "#000", fontSize: "5rem" }}>
                Futuristic Architecture
                </h3>
                <p>
                Innovative designs shaping the cities of tomorrow.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={Img2}
                className="d-block w-100 h-100 object-fit-cover"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Timeless Gothic Cathedralsl</h3>
                <p>Explore the grandeur of medieval architecture</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={Img3}
                className="d-block w-100 h-100 object-fit-cover"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Urban Marvels</h3>
                <p>
                The art of constructing breathtaking cityscapes.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <Card
            style={{
              width: "100%",
              backgroundColor: "#000",
              marginTop: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
          >
              <ListGroup variant="flush">
              <ListGroup.Item style={{ fontSize: "30px", color: "#eaeaea", backgroundColor: "#000" }}>
                  Sustainable Urban Designs
                </ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "30px", color: "#eaeaea", backgroundColor: "#000" }}>
                  Renaissance Revival Structures
                </ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "30px", color: "#eaeaea", backgroundColor: "#000" }}>
                  Neo-Classical Artistry
                </ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "30px", color: "#eaeaea", backgroundColor: "#000" }}>
                  Futuristic Skyscrapers
                </ListGroup.Item>
                <ListGroup.Item style={{ fontSize: "30px", color: "#eaeaea", backgroundColor: "#000" }}>
                  Eco-Friendly Innovations
                </ListGroup.Item>
              </ListGroup>
          </Card>

          <Card className="bg-dark text-white">
            <img
              src={Img6}
              id="image-card"
              className="d-block w-100px h-200px"
              alt="First slide"
            />

            <Card.ImgOverlay>
              {/* <Card.Title style={{color:"darkgreen"}}>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text> */}
            </Card.ImgOverlay>
          </Card>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Card style={{ width: "18rem" }}>
              <img src={img7}></img>
              <Card.Body>
                <Card.Title>Modern</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Iconic Skyscrapers</ListGroup.Item>
                <ListGroup.Item>Timeless Monuments</ListGroup.Item>
                <ListGroup.Item>Sustainable Living Spaces</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>


















            <Card style={{ width: "18rem" }}>
              <img src={Img4}></img>
              <Card.Body>
                <Card.Title>Futuristic</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See More</Card.Link>
                <Card.Link href="#">Contact Us</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <img src={Img8}></img>
              <Card.Body>
                <Card.Title>Classical</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See More</Card.Link>
                <Card.Link href="#">Contact Us</Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Card style={{ width: "18rem" }}>
              <img src={Img1}></img>
              <Card.Body>
                <Card.Title>Interior</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See more </Card.Link>
                <Card.Link href="#">Contact Us</Card.Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <img src={Img10}></img>
              <Card.Body>
                <Card.Title>Conncetivity</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See More</Card.Link>
                <Card.Link href="#">Contact Us</Card.Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <img src={Img9}></img>
              <Card.Body>
                <Card.Title>All Facilites</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">See More</Card.Link>
                <Card.Link href="#">Contact Us</Card.Link>
              </Card.Body>
            </Card>

            {/* Contact Form Section */}
            <Container id="contact" className="my-5 py-5 bg-light rounded" style={{ maxWidth: "700px" }}>
  <h2 className="text-center mb-4">Get in Touch</h2>
  <Form>
    <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter your email" required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formMessage">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea" rows={4} placeholder="Type your message here..." required />
    </Form.Group>

    <Button variant="primary" type="submit" className="w-100">
      Submit
    </Button>
  </Form>
</Container>


          


            <MDBFooter
              bgColor="light "
              className="text-center text-lg-start text-muted "
            >
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div>

                <div>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon color="secondary" fab icon="facebook-f" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon color="secondary" fab icon="twitter" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon color="secondary" fab icon="google" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon color="secondary" fab icon="instagram" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon color="secondary" fab icon="linkedin" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon color="secondary" fab icon="github" />
                  </a>
                </div>
              </section>

              <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                  <MDBRow className="mt-3">
                    <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        <MDBIcon
                          color="secondary"
                          icon="gem"
                          className="me-3"
                        />
                          Architectural Wonders
                      </h6>
                      <p>
                      Celebrating the finest creations in architectural history — from past to present.

                      </p>
                    </MDBCol>

                    <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Gothic</h6>
                      <p>
                        <a href="#!" className="text-reset">
                        Styles
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                        Modern
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                        Classical
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                        Futuristic
                        </a>
                      </p>
                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                      </h6>
                      <p>
                        <a href="#!" className="text-reset">
                          Pricing
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Settings
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Orders
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Help
                        </a>
                      </p>
                    </MDBCol>

                    <MDBCol
                      md="4"
                      lg="3"
                      xl="3"
                      className="mx-auto mb-md-0 mb-4"
                    >
                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p>
                        <MDBIcon
                          color="secondary"
                          icon="home"
                          className="me-2"
                        />
                        New York, NY 10012, US
                      </p>
                      <p>
                        <MDBIcon
                          color="secondary"
                          icon="envelope"
                          className="me-3"
                        />
                        fa4258745@gmail.com
                      </p>
                      <p>
                        <MDBIcon
                          color="secondary"
                          icon="phone"
                          className="me-3"
                        />{" "}
                        9926312030
                      </p>
                      <p>
                        <MDBIcon
                          color="secondary"
                          icon="print"
                          className="me-3"
                        />{" "}
                        9977667222
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>

              <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
              >
                © 2025 Copyright:
                <a
                  className="text-reset fw-bold"
                  href="https://mdbootstrap.com/"
                >
                 Architectural Wonders.
                </a>
              </div>
            </MDBFooter>


          </div>

          <div>
            <br />
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .nav-link-custom {
            transition: color 0.3s ease-in-out;
          }
          .nav-link-custom:hover {
            color: #f8c102 !important;
          }
          .object-fit-cover {
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
}

export default App;











