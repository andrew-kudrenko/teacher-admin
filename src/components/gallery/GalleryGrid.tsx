import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  GridList,
  GridListTile,
  useMediaQuery,
  Box,
} from '@material-ui/core'
import { GalleryGridProps } from '../../types/components.types'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      maxWidth: 1000,
    },
  })
)

export const GalleryGrid: React.FC<GalleryGridProps> = ({ tiles }) => {
  const classes = useStyles()
  const { location } = useHistory()

  const greatThanSm = useMediaQuery(`(min-width: ${350}px)`)
  const greatThanMd = useMediaQuery(`(min-width: ${450}px)`)
  const greatThanLg = useMediaQuery(`(min-width: ${650}px)`)

  const baseHeight = 120
  let factor = 1

  if (greatThanSm) {
    factor = 1.25
  }

  if (greatThanMd) {
    factor = 1.75
  }

  if (greatThanLg) {
    factor = 3
  }

  return (
    <Paper className={classes.root} elevation={2}>
      <Box padding={1}>
        <GridList
          cellHeight={baseHeight * factor}
          className={classes.gridList}
          cols={3}
          spacing={8}
        >
          {tiles.map((t, idx) => (
            <GridListTile
              key={`${t.id}--${idx}`}
              cols={greatThanMd ? t.cols : 3}
              component={NavLink}
              to={`${location.pathname}/edit/${t.id}`}
            >
              <img src={t.file} alt="" />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Paper>
  )
}
