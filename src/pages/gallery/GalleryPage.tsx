import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Typography } from '@material-ui/core'
import { GalleryGrid } from '../../components/gallery/GalleryGrid'
import { GalleryGridTileProps } from '../../types/components.types'
import { apiUrl } from '../../components/helpers/api.helpers'
import { Photo, ID } from '../../types/entities.types'
import { NavLink } from 'react-router-dom'

export const GalleryPage: React.FC = () => {
  const [tiles, setTiles] = useState<Array<GalleryGridTileProps>>([])

  useEffect(() => {
    async function load() {
      const data: Array<ID<Photo>> = (await axios.get(`${apiUrl}/photos`)).data
      const handled: Array<ID<Photo>> = data.map(p => ({
        ...p,
        file: `${apiUrl}/${p.file}`,
        cols: p.cols >= 1 && p.cols <= 3 ? p.cols : 1,
      }))
      console.log(handled)

      setTiles(handled)
    }

    load()
  }, [])

  return (
    <>
      <Typography variant="h5" gutterBottom align="center">
        {'Галерея'}
      </Typography>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Button
          variant="outlined"
          color="secondary"
          component={NavLink}
          to="/gallery/add"
        >
          {'Добавить'}
        </Button>
      </Box>
      <GalleryGrid tiles={tiles} />
    </>
  )
}
