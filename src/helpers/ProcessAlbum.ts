// TODO: move to types file
interface Image {
  id: string
  description: string
  link: string
  nsfw: boolean
  startingIndex?: number
  endingIndex?: number
}

const processAlbum = (images: Image[]) => {
  const constructedImages: Image[] = []
  let previousImage: Image | null = null

  images.forEach((image: Image, idx: number) => {
    const {id, link, nsfw} = image
    let fixedImage: Image

    let fixedLink = image.description.replace(/\s/g, '').substring(4)

    // console.log(previousImage)

    if (idx > 0 && fixedLink === previousImage!.description) {
      // # of x qc pictures, we can skip over
      // since we already have the product link
      return
    }

    fixedImage = {
      id,
      link,
      description: fixedLink,
      nsfw,
      startingIndex: idx += 1,
    }

    previousImage = fixedImage

    constructedImages.push(fixedImage)
  })

  return constructedImages
}

export default processAlbum
