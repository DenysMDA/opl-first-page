import React from 'react'
import BodyContent_1 from '../../../assets/BodyContent_1.png'

interface BodyLeftBlockProps {
  side?: string;
  img?: string;
  title: string;
  description?: string;
  optionalInfo?: string;
  link?: string;
  bodyclass?: string;
  btnText?: string,
  imgClass?: string
}

const BodyLeftBlock = ({side='', img, title, description='', optionalInfo='', link, bodyclass='', imgClass='', btnText=''} : BodyLeftBlockProps) => {

  return (
    <section className={`bodycontent${side}  ${bodyclass}`}>
        <div className='bodycontent-img'>
          <div role='img' className={`bodycontent-img_wrapper ${imgClass}`}/>
        </div>
        <div className='bodycontent-content'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{optionalInfo}</p>
          <div className='bodycontent-btn'><a href={link}>{btnText}</a></div>
        </div>
    </section>
  )
}

export default BodyLeftBlock