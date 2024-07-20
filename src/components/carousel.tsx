import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import { AnimationHandlerResponse } from 'react-responsive-carousel/lib/ts/components/Carousel/types';

export type CarouselSlide = {
  src: string;
  caption: string;
};

function ArrowButton({
  onClick,
  isPrevious,
}: {
  onClick: () => void;
  isPrevious?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? 'Previous' : 'Next'}
      className={`absolute z-10 top-[calc(50%-1.2rem)] h-[2.4rem] w-[2.4rem] ${isPrevious ? 'left-5' : 'right-5'} rounded-full bg-gray-400 cursor-pointer flex items-center justify-center text-2xl opacity-80 text-white hover:opacity-85 duration-75`}
    >
      {isPrevious ? (
        <FiChevronLeft className="mr-1" />
      ) : (
        <FiChevronRight className="ml-1" />
      )}
    </button>
  );
}

export default function TechCrewCarousel({
  slides,
}: {
  slides: CarouselSlide[];
}) {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      interval={10000}
      swipeable
      useKeyboardArrows
      autoPlay={false}
      stopOnHover
      emulateTouch
      infiniteLoop
      showIndicators={false}
      renderArrowPrev={(onClick, hasPrev) =>
        hasPrev && <ArrowButton onClick={onClick} isPrevious />
      }
      renderArrowNext={(onClick, hasNext) =>
        hasNext && <ArrowButton onClick={onClick} />
      }
    >
      {slides.map((slide, i) => (
        <figure key={i} className="bg-black">
          <img
            src={slide.src}
            alt={slide.caption}
            className="object-contain opacity-60"
          />
          <figcaption>{slide.caption}</figcaption>
        </figure>
      ))}
    </Carousel>
  );
}