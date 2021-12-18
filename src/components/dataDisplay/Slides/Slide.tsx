import React from 'react'
import { Slide as MuiSlide } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'
import { Link } from '../../navigation/index'

export interface SlideProps {
  src: string
  link?: string
}

export const Slide: React.FC<SlideProps> = (props) => {
  const { src, link, children } = props
  const classes = useStyles()

  const renderSlide = (): JSX.Element => {
    return (
      <MuiSlide direction='left' in>
        <div
          className={classes.root}
          style={{ backgroundImage: `url(${src})` }}
        >
          {children && <div className={classes.overlay}>{children}</div>}
        </div>
      </MuiSlide>
    )
  }

  if (link !== undefined) {
    return (
      <Link href={link} target='_blank' rel='noreferrer'>
        {renderSlide()}
      </Link>
    )
  }

  return renderSlide()
}
const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      backgroundPosition: 'center',
      minWidth: '100%',
      height: '100%',
      backgroundSize: 'cover'
    },
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, .7)',
      width: '100%',
      height: '100%'
    },
    link: {
      minWidth: '100%',
      textDecoration: 'none',
      color: theme.palette.common.white,
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }
})
