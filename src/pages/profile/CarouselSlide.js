import { Carousel } from 'react-bootstrap'
import Photo from '../../assets/1.png.png'

function CarouselSlide({ caption, type, children, ...props }) {
  return (
    <Carousel.Item style={{ height: '190px', width: '100px' }} {...props}>
      <img
        className={`d-block ${!type && 'w-100'}`}
        src={Photo}
        alt="First slide"
        style={
          !type
            ? { objectFit: 'contain' }
            : {
                width: '80%',
                position: 'relative',
                left: '30px',
                top: '-10px',
              }
        }
      />
      <Carousel.Caption
        style={{
          position: 'absolute',
          top: '50px',
          right: '20px',
        }}
      >
        <h3
          style={{
            fontSize: '17px',
            fontWeight: '700',
            color: 'black',
          }}
        >
          {caption}
        </h3>
        <p
          style={{
            fontSize: '18px',
            color: 'black',
            marginTop: '0px',
            marginTop: '0px',
            color: 'black',
          }}
        >
          {children}
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  )
}

export default CarouselSlide
