import imgshow1 from '../imagenes/imgshow1.jpg'
import imgshow2 from '../imagenes/imgshow2.jpg'
import imgshow3 from '../imagenes/imgshow3.jpg'
import imgshow4 from '../imagenes/imgshow4.jpg'
import imgshow5 from '../imagenes/imgshow4.jpg'
import imgshow6 from '../imagenes/imgshow6.jpg'
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './Styles/Carrousel.module.css'

const fadeImages = [
  {
    url: imgshow1,
    caption: 'Slide 1'
  },
  {
    url: imgshow2,
    caption: 'Slide 2'
  },
  {
    url: imgshow3,
    caption: 'Slide 3'
  },
  {
    url: imgshow4,
    caption: 'Slide 4'
  },
  {
    url: imgshow5,
    caption: 'Slide 5'
  },
  {
    url: imgshow6,
    caption: 'Slide 6'
  },
];

const Carrousel = () => {
  return (
    <div className="slide-container">
      <Fade
      arrows={false}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade"  key={index}>
            <div className="image-container">
              <img className={styles.imgShow} src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Carrousel