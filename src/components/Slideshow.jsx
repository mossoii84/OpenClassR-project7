import { useState } from 'react'
import './Slideshow.css'

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md'

export const Slideshow = ({ children }) => {
  const [position, setPosition] = useState(0)

  // children.length = 3(always)
  // image possiton=0 visible ?
  // click a button
  const previous = () => {
    setPosition(position === 0 ? children.length - 1 : position - 1)
  }
  const next = () => {
    setPosition(position === children.length - 1 ? 0 : position + 1)
  }

  return (
    <section className="slider">
      {children.map((slide, index) => {
        return (
          <div
            className={index === position ? 'slide active' : 'slide'}
            key={index}
          >
            {/* for button */}
            {children.length > 1 && (
              <div>
                <div className="arrowPrevious">
                  <MdOutlineArrowBackIosNew onClick={previous} />
                </div>
                <div className="arrowNext">
                  <MdOutlineArrowForwardIos onClick={next} />
                </div>
              </div>
            )}

            {index === position && (
              <img src={slide} alt="" className="imageSlider" />
            )}
          </div>
        )
      })}
    </section>
  )
}
