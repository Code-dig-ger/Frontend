import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

const ProfileCarousel = (props) => {
  let items = []
  if (props.codeforces) {
    items = [
      {
        id: 1,
        altText: 'Organization Rank',
        caption: `${props.codeforces.result.organizationRank}`,
      },
      {
        id: 2,
        altText: 'Country Rank',
        caption: `${props.codeforces.result.countryRank}`,
      },
      {
        id: 3,
        altText: 'World Rank',
        caption: `${props.codeforces.result.worldRank}`,
      },
    ]
  } else if (props.codechef) {
    items = [
      {
        id: 1,
        altText: 'Country Rank',
        caption: `${props.codechef.result.countryRank}`,
      },
      {
        id: 2,
        altText: 'World Rank',
        caption: `${props.codechef.result.worldRank}`,
      },
    ]
  }
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="header-tag" captionText={item.altText} />
        <CarouselCaption className="caption-tag" captionText={item.caption} />
      </CarouselItem>
    )
  })

  return (
    <div>
      <style>
        {`.custom-tag {
              padding-top: 50px;
              height: 175px;
              background: black;
            }
            .header-tag{
                font-size: 13px;
            }
            .caption-tag{
                font-size: 28px;
                margin-bottom: 25px;
            }
        
            `}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </div>
  )
}

export default ProfileCarousel
