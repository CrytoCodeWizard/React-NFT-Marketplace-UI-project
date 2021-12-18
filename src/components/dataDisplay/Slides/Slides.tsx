import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '../../../theme/types'
import { Grid } from '../../layout/index'
import { SlideItem } from './SlideItem'
import { Slide } from './Slide'
import { SlidesProps } from './types'
import { Paper } from '../../surfaces'

export const Slides: React.FC<SlidesProps> = (props) => {
  const { slides } = props
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0)
  const classes = useStyles()

  const onSlideItemClick = (slideIndex: number): void => {
    setCurrentSlideIndex(slideIndex)
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (slides.length - 1 !== currentSlideIndex) {
        setCurrentSlideIndex(currentSlideIndex + 1)
      } else {
        setCurrentSlideIndex(0)
      }
    }, 6000)

    return (): void => {
      return clearTimeout(timer)
    }
  }, [slides.length, currentSlideIndex, setCurrentSlideIndex])

  return (
    <Grid container className={classes.root}>
      <Grid item sm={9}>
        <Paper className={classes.slideContainer}>
          <Slide
            src={slides[currentSlideIndex].src}
            link={slides[currentSlideIndex].link}
          >
            {slides[currentSlideIndex].children}
          </Slide>
        </Paper>
      </Grid>
      <Grid item className={classes.slides} sm={3}>
        {slides.map((slide, index) => {
          return (
            <SlideItem
              index={index}
              key={slide.title}
              title={slide.title}
              src={slide.src}
              active={currentSlideIndex === index}
              onClick={onSlideItemClick}
            />
          )
        })}
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    slideContainer: {
      flexGrow: 1,
      position: 'relative',
      overflow: 'hidden',
      marginRight: theme.spacing(6),
      height: 450,
      borderRadius: theme.radius.large
    },
    slides: {
      justifyContent: 'center',
      alignItems: 'center',
      overflowX: 'hidden',
      msOverflowX: 'hidden',
      maxHeight: 450
    }
  }
})
