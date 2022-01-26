import React, { useState } from "react";
import "./portfolio.css";
import portfolioData from "../../helpers/portfolioData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Portfolio = () => {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  //const handleClose = () => setModalShow(false);

  const createModal = (data) => {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="containedd-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: "200px" }} />
        </Modal.Body>
        <Modal.Footer>
          <div>Technologies used:</div>
          <p style={{ fontSize: "0.7rem", marginRight: "auto" }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)} className="button">
            Close
          </Button>
        </Modal.Footer>
        <a
          id="portfolio__modal__link"
          href={data.link}
          target="_black"
          rel="noreferrer"
        >
          Go to site
        </a>
      </Modal>
    );
  };

  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio__card__container">
        <Image
          className="portfolio__image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              desc: e.desc,
              summary: e.summary,
              tech: e.tech,
            });
            setModalShow(true);
          }}
          src={e.image}
        />
        <div className="portfolio__click__info">&#x150E;&#xFE0E;</div>
        {createModal(tempData)}

        {/*   <Modal
          show={modalShow}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{e.desc}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{e.summary}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal> */}
      </Card>
    );
  });

  return (
    <div className="portfolio__main__container" id="portfolio">
      <h1>PORTFOLIO</h1>
      <div className="icons">
        <a
          href="https://github.com/Altynay-ayyao"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="github"/>
        </a>
        <a
          href="https://www.linkedin.com/in/altynaysabitzhan-8085121a5/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="linkedin"/>
        </a>
      </div>
      <Container fluid="lg" style={{ padding: "2rem 0" }}>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
};

export default Portfolio;
