import { useState } from 'react'
import './Slideshow.css'

// https://www.youtube.com/watch?v=l1MYfu5YWHc
// https://react-icons.github.io/react-icons/search?q=arrow

import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";



//children(сами задали, но есть и спец слово если бы были там встроенные <div>) - это те елементы которые находятся в <Slideshow><div 1,2,3</div>
export const Slideshow = ({ children }) => {
  const [position, setPosition] = useState(0)

  // children.length = всегда равен 3 хоть я +1 хоть -1
  // логика в том что наша фотка которая виднеется всегда possiton=0 *??
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
        { children.length > 1 && ( 
          <div>
          <div className="arrowPrevious" ><MdOutlineArrowBackIosNew onClick={previous} /></div> 
          <div  className="arrowNext" ><MdOutlineArrowForwardIos onClick={next}/></div>
          </div>
          )} 
 

          {index === position && (
            <img src={slide} alt="" className="imageSlider" />
          )}
        </div>
      )
    })}

    {/* <div  className="arrowNext" ><BsFillArrowRightCircleFill onClick={next}/></div> */}
  </section>
)


}