import React from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  useMediaQuery,
} from '@material-ui/core'
import {
  BookOutlined,
  CameraEnhanceOutlined,
  ChevronLeft,
  HomeOutlined,
} from '@material-ui/icons'

import { DrawerListOption } from './DrawerListOption'
import {
  DrawerListOptionProps,
  DrawerProps,
} from '../../../types/components.types'
import { useCustomTheme } from '../../../hooks/theme.hook'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  })
)

const drawerListOptions: Array<DrawerListOptionProps> = [
  // { label: 'Главная', to: '/', icon: <HomeOutlined /> },
  {
    label: 'Материалы',
    to: '/materials',
    icon: <BookOutlined />,
  },
  {
    label: 'Категории',
    to: '/materials-categories',
    icon: <BookOutlined />,
  },
  // { label: 'Портфолио', to: '/portfolio', icon: <BusinessCenterOutlined /> },
  { label: 'Новости', to: '/news', icon: <HomeOutlined /> },
  { label: 'Фотогалерея', to: '/gallery', icon: <CameraEnhanceOutlined /> },
  // { label: 'Достижения', to: '/achievements', icon: <StarOutline /> },
  // { label: 'Контакты', to: '/contacts', icon: <CallOutlined /> },
]

export const Drawer: React.FC<DrawerProps> = ({ opened, onToggle }) => {
  const classes = useStyles()
  const [{ breakpoints }] = useCustomTheme()
  const lessThanMd = useMediaQuery(`(max-width: ${breakpoints.values.md}px)`)

  const open = !lessThanMd || opened

  return (
    <MuiDrawer
      variant={lessThanMd ? 'temporary' : 'persistent'}
      open={open}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onToggle}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        {drawerListOptions.map(o => (
          <React.Fragment key={o.label}>
            <DrawerListOption {...o} />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </MuiDrawer>
  )
}
