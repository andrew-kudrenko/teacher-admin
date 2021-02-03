import React from 'react'
import clsx from 'clsx'
import {
  Grid,
  Button,
  colors,
  Box,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import { EditorLayoutButtonsProps } from '../../../types/components.types'
import { useHistory } from 'react-router-dom'
import { EditorMode } from '../../../enums/common.enums'

function paintButton(color: string) {
  return { color, borderColor: color }
}

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    mr: { marginRight: spacing(2) },
    deleteButton: paintButton(colors.pink[500]),
    saveButton: paintButton(colors.indigo[500]),
    saveAndLeaveButton: paintButton(colors.teal[500]),
  })
)

export const EditorLayoutButtons: React.FC<EditorLayoutButtonsProps> = props => {
  const { mode, onDelete, onSave } = props

  const classes = useStyles()
  const history = useHistory()

  const isEditing = mode === EditorMode.Edit

  const leave = () => {
    const splitPathname = history.location.pathname.split('/')
    const previousLocation = splitPathname
      .slice(0, splitPathname.length - (isEditing ? 2 : 1))
      .join('/')

    history.push(previousLocation)
  }

  const onSaveAndLeave = async () => {
    await onSave()
    leave()
  }

  const onDeleteAndLeave = async () => {
    await onDelete()
    leave()
  }

  return (
    <Grid container item xs={12}>
      <Box className={classes.root}>
        {isEditing && (
          <Button
            onClick={onDeleteAndLeave}
            variant="outlined"
            className={clsx([classes.deleteButton, classes.mr])}
          >
            {'Удалить'}
          </Button>
        )}
        <Button
          onClick={onSaveAndLeave}
          variant="outlined"
          className={clsx([classes.saveAndLeaveButton, classes.mr])}
        >
          {'Сохранить'}
        </Button>
        {/* <Button
          onClick={onSave}
          variant="outlined"
          className={classes.saveButton}
        >
          {'Сохранить'}
        </Button> */}
      </Box>
    </Grid>
  )
}
