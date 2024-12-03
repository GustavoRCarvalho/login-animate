export const imageUrls = [
  "../../assets/ghibli/77a266bb54fc65179ec0672d97268c3a.gif",
  "../../assets/ghibli/ghibliLogo.svg",
  "../../assets/sunset/filtro.svg",
  "../../assets/sunset/filtroblack.svg",
  "../../assets/ordem/ordemLogo.png",
  "../../assets/ordem/parede.jpg",
  "../../assets/ordem/static-assets-upload12428278481875804805.webp",
  "../../assets/futuristic/animeImage.png",
  "../../assets/futuristic/animeMontainsNight.png",
  "../../assets/futuristic/animeMountains.png",
  "../../assets/retro/gamepad.svg",
]

export const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
}
