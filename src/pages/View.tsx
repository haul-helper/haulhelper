import React from 'react'
import {mount, route} from 'navi'
import {useCurrentRoute} from 'react-navi'
import processImages from 'h2/helpers/ProcessAlbum'
import api from 'h2/helpers/Client'
import ImageInfo from 'h2/components/ImageInfo/ImageInfo'
import {Header, Secondary} from 'h2/styled/Typography'

export default mount({
  '/:id': route(async (req, _ctx) => {
    const album = await api.get(req.params.id).then(album => album.json())
    const {
      data: {images},
    } = album
    const processedAlbum = await processImages(images)
    return {
      view: <View />,
      data: {processedAlbum},
      title: `h2 Valet - ${req.params.id}`,
    }
  }),
})

const View = () => {
  const route = useCurrentRoute()
  const {
    lastChunk: {
      request: {
        params: {id},
      },
    },
  } = route
  const {
    data: {processedAlbum},
  } = route
  return (
    <>
      <Header>"ALBUM LINKS"</Header>
      <Secondary href={`https://imgur.com/a/${id}`} target="_blank">
        "{id}"
      </Secondary>
      {processedAlbum.map((img: any, idx: number) => {
        let nextIndex: string | number = 'End'
        if (idx !== processedAlbum.length - 1) {
          const nextImageRef = processedAlbum[(idx += 1)]
          nextIndex = nextImageRef.startingIndex - 1
        }
        return <ImageInfo key={img.id} image={img} endingIndex={nextIndex} />
      })}
    </>
  )
}

export {View}
