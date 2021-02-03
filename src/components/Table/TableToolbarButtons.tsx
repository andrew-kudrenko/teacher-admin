import React from 'react'
import {
  makeStyles,
  Theme,
  createStyles,
  colors,
  Box,
  Button,
} from '@material-ui/core'
import { TableToolbarButtonsProps } from '../../types/components.types'
import { NavLink, useHistory } from 'react-router-dom'

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    editButton: {
      color: colors.cyan[500],
      borderColor: colors.cyan[500],
      marginRight: spacing(2),
    },
    deleteButton: {
      color: colors.pink[500],
      borderColor: colors.pink[500],
      marginRight: spacing(2),
    },
    createButton: {
      color: colors.indigo[500],
      borderColor: colors.indigo[500],
    },
  })
)

export const TableToolbarButtons: React.FC<TableToolbarButtonsProps> = props => {
  const { selected, onDelete } = props

  const classes = useStyles()
  const {
    location: { pathname },
  } = useHistory()

  return (
    <Box display="flex" marginY={2}>
      <Button
        className={classes.editButton}
        variant="outlined"
        disabled={selected.length !== 1}
        component={NavLink}
        to={`${pathname}/edit/${selected[0]}`}
      >
        {'Редактировать'}
      </Button>
      <Button
        onClick={onDelete.bind(null, selected as Array<string>)}
        className={classes.deleteButton}
        variant="outlined"
        disabled={selected.length === 0}
      >
        {'Удалить'}
      </Button>
      <Button
        className={classes.createButton}
        variant="outlined"
        component={NavLink}
        to={`${pathname}/add`}
      >
        {'Создать'}
      </Button>
    </Box>
  )
}
