'use client'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import TextoSlider from "./TextoSlider";

const giauPass = "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
const bogliasco = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
const craterRock = "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

function SliderBasic() {
  return (
    <HeroSlider
        height={"65vh"}
        autoplay
        controller={{
            initialSlide: 1,
            slidingDuration: 100,
            slidingDelay: 100,
            onSliding: (nextSlide) =>
              console.debug("onSliding(nextSlide): ", nextSlide),
            onBeforeSliding: (previousSlide, nextSlide) =>
              console.debug(
                "onBeforeSliding(previousSlide, nextSlide): ",
                previousSlide,
                nextSlide
              ),
            onAfterSliding: (nextSlide) =>
              console.debug("onAfterSliding(nextSlide): ", nextSlide)
        }}
    >
      <Overlay>
        <TextoSlider />
      </Overlay>
        <Slide
          background={{
            backgroundImageSrc: giauPass
          }}
        />

        <Slide
          background={{
            backgroundImageSrc: bogliasco
          }}
        />

        <Slide
          background={{
            backgroundImageSrc: craterRock
          }}
        />
    </HeroSlider>
  )
}

export default SliderBasic
