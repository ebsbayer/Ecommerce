import { Carousel } from "react-bootstrap";

function CarouselAnuncios() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCc9yLJ-WHxzzJK81Gpuv3b6dBXjC9DCDaAQ&usqp=CAU" //Anuncio 1
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMeueBd_KsUIuZsbNfqVkJdoNfr6vn2t56g&usqp=CAU" // Anuncio 2
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://admin.ultimatodobacon.com/wp-content/uploads/2020/08/10-Super-Her%C3%B3is-Negros-que-voc%C3%AA-PRECISA-conhecer-Spawn.jpg" // Anuncio 3
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAnuncios;