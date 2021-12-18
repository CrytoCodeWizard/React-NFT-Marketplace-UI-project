import React from 'react'
import { SlideProps } from './types'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'
import { Typography } from '../Typography/Typography'
import { Grid } from '../../layout/index'
import { Paper } from '../../surfaces'
import { LinearProgress } from '../../feedback'

export interface SlideItemProps extends SlideProps {
  index: number
  active: boolean
  onClick: (slideIndex: number) => void
}

export const SlideItem: React.FC<SlideItemProps> = (props) => {
  const { index, title, active, onClick } = props
  const [progress, setProgress] = React.useState(0)
  const classes = useStyles()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (active) {
        if (progress < 100) setProgress(progress + 1.85)
        else setProgress(100)
      } else {
        setProgress(0)
      }
    }, 100)

    return (): void => {
      return clearTimeout(timer)
    }
  }, [progress, active])

  return (
    <Paper className={`${classes.root} ${active ? 'active' : ''}`}>
      <Grid
        container
        direction='column'
        onClick={(): void => {
          onClick(index)
        }}
      >
        <Typography variant='subtitle1' className={classes.title}>
          {title}
        </Typography>
        {active && (
          <LinearProgress
            variant='determinate'
            className={classes.bar}
            value={progress}
            // color='secondary'
          />
        )}
      </Grid>
    </Paper>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      opacity: 0.5,
      marginBottom: theme.spacing(5),
      backgroundColor: theme.palette.background.light,
      cursor: 'pointer',
      padding: theme.spacing(4),
      width: '90%',
      borderRadius: theme.radius.medium,
      '&:last-child': {
        marginBottom: 0
      },
      '&.active, &:hover': {
        opacity: 1
      }
    },
    title: {
      marginBottom: 5,
      color: theme.palette.text.primary,
      fontWeight: 'bold'
    },
    bar: {
      marginTop: 5,
      width: '100%',
      borderRadius: theme.radius.large
    }
  }
})
