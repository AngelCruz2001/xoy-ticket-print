import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, WithStore, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "./Carousel.scss"
import sld1 from '../../assets/sliderFooter/sld1.png'
export const Carousel = () => {

    return (
        <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={217}
            totalSlides={3}
            isPlaying={true}
            interval={5000}
            infinite={true}
        >
            <Slider>
                <Slide index={0}>
                    <Image src={sld1} hasMasterSpinner={true} />
                </Slide>
                <Slide index={1}>
                    <Image src={sld1} hasMasterSpinner={true} />
                </Slide>
                <Slide index={2}>
                    <Image src={sld1} hasMasterSpinner={true} />
                </Slide>
            </Slider>
            <div className="dotContainer">
                <Dot slide={0} disabled={false} className="dot" />
                <Dot slide={1} disabled={false} className="dot" />
                <Dot slide={2} disabled={false} className="dot" />
            </div>
        </CarouselProvider >

    )
}
