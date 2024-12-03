import image1 from "../../assets/ghibli/77a266bb54fc65179ec0672d97268c3a.gif"
import image2 from "../../assets/ghibli/ghibliLogo.svg"
import image3 from "../../assets/sunset/filtro.svg"
import image4 from "../../assets/sunset/filtroblack.svg"
import image5 from "../../assets/ordem/ordemLogo.png"
import image6 from "../../assets/ordem/parede.jpg"
import image7 from "../../assets/ordem/static-assets-upload12428278481875804805.webp"
import image8 from "../../assets/futuristic/animeImage.png"
import image9 from "../../assets/futuristic/animeMontainsNight.png"
import image10 from "../../assets/futuristic/animeMountains.png"
import image11 from "../../assets/retro/gamepad.svg"

export const imageUrls = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
]

export const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
}
