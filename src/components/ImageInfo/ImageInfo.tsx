import React from 'react'
import {
  ImageInfoWrapper,
  WTCLink,
  Meta,
  Warning,
} from 'h2/components/ImageInfo/ImageInfo.styles'

// TODO use Image type
const ImageInfo = ({image, endingIndex}: any) => (
  <ImageInfoWrapper>
    <Meta>
      Images {image.startingIndex} - {endingIndex}
    </Meta>
    <WTCLink href={image.description} target="_blank">
      Link
    </WTCLink>
    {image.nsfw && <Warning>nsfw</Warning>}
  </ImageInfoWrapper>
)

export default ImageInfo
