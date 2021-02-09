import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography, Box, Button } from '@material-ui/core'
import { apiUrl } from '../../components/helpers/api.helpers'
import { NewsCard } from '../../components/news/NewsCard'
import { ID, News } from '../../types/entities.types'
import { NavLink, useHistory } from 'react-router-dom'

export const NewsPage: React.FC = () => {
  const { location } = useHistory()
  const [news, setNews] = useState<Array<ID<News>>>([])

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(`${apiUrl}/news`)
      setNews(
        response.data.filter((n: ID<News>) => n.id && n.title && n.content)
      )
    })()
  }, [])

  return (
    <>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        {'Новости'}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginBottom={2}
      >
        <Box marginBottom={2}>
          <Button
            variant="outlined"
            color="primary"
            component={NavLink}
            to={`${location.pathname}/add`}
          >
            {'Добавить'}
          </Button>
        </Box>
        {news.length ? (
          news.map(n => <NewsCard {...n} />)
        ) : (
          <Typography variant="h6" component="h6" align="center" gutterBottom>
            {'Пока нет новостей'}
          </Typography>
        )}
      </Box>
    </>
  )
}
