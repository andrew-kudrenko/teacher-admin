import React, { useState } from 'react'
import clsx from 'clsx'
import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { Navbar } from '../../nav/navbar/Navbar'

const drawerWidth = 240
const appBarHeight = 65

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: appBarHeight + spacing(2),
      paddingBottom: spacing(2),
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transitionProperty: 'padding-left',
      transitionDuration: '.2s',
      [breakpoints.up('md')]: {
        paddingLeft: drawerWidth,
      },
    },
    shiftedByDrawer: {
      [breakpoints.up('md')]: {
        paddingLeft: drawerWidth,
      },
    },
  })
)

export const BaseLayout: React.FC = ({ children }) => {
  const classes = useStyles()

  const [opened, setOpened] = useState(false)

  return (
    <>
      <Navbar opened={opened} onToggle={setOpened.bind(null, !opened)} />
      <Box
        className={clsx(classes.main, { [classes.shiftedByDrawer]: opened })}
      >
        <Container className={classes.container}>
          <Box maxWidth={800} width="100%">
            {children}
          </Box>
        </Container>
      </Box>
    </>
  )
}
