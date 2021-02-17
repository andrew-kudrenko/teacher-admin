import React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink, useHistory } from 'react-router-dom'
import { ID, News } from '../../types/entities.types'
import { apiUrl } from '../helpers/api.helpers'

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 550,
    width: '100%',
    margin: '.5rem',
  },
  media: {
    height: 250,
  },
  content: {},
})

export const NewsCard: React.FC<ID<News>> = ({ title, image, content, id }) => {
  const classes = useStyles()
  const { location } = useHistory()

  return (
    <Link to={`${location.pathname}/edit/${id}`} component={NavLink}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.content}
            >
              {content}
            </Typography>
          </CardContent>
          {image && (
            <CardMedia className={classes.media} image={`${apiUrl}/${image}`} />
          )}
        </CardActionArea>
      </Card>
    </Link>
  )
}
