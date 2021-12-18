import React from 'react'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import createStyles from '@mui/styles/createStyles'
import { CheckboxProps } from '@mui/material'
import { Button } from '../Button/Button'
import { Grid } from '../../layout/index'
import { CustomList } from './CustomList'

export interface TransferListProps {
  leftList: []
  rightList: []
  checkedList?: never[]
  checkboxProps?: CheckboxProps
  checkKey?: string
  onChange: (leftList: [], rightList: []) => void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function not(a: never[], b: any[]): never[] {
  return a.filter((value) => {
    return b.indexOf(value) === -1
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function intersection(a: any[], b: any[]): any[] {
  return a.filter((value) => {
    return (
      b.findIndex((item) => {
        return item.id === value
      }) !== -1
    )
  })
}

function union(a: never[], b: never[]): never[] {
  return [...a, ...not(b, a)]
}

export function TransferList({
  leftList = [],
  rightList = [],
  checkedList = [],
  checkboxProps = {},
  onChange
}: TransferListProps): JSX.Element {
  const classes = useStyles()
  const [checked, setChecked] = React.useState<never[]>(checkedList)
  const [left, setLeft] = React.useState<[]>(leftList)
  const [right, setRight] = React.useState<[]>(rightList)

  React.useEffect(() => {
    onChange(left, right)
  }, [left, onChange, right])

  const leftChecked = intersection(checked, left)
  const rightChecked = intersection(checked, right)

  const handleToggle = (id: never) => {
    return (): void => {
      const currentIndex = checked.indexOf(id)
      const newChecked: never[] = [...checked]

      if (currentIndex === -1) {
        newChecked.push(id)
      } else {
        newChecked.splice(currentIndex, 1)
      }
      setChecked(newChecked)
    }
  }

  const numberOfChecked = (items: never[]): number => {
    return intersection(checked, items).length
  }

  const handleToggleAll = (items: never[]) => {
    return (): void => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const c: any = items.map((value: any) => {
        // eslint-disable-line
        return value.id
      })

      if (numberOfChecked(items) === items.length) {
        setChecked(not(checked, c))
      } else {
        setChecked(union(checked, c))
      }
    }
  }

  const handleCheckedRight = (): void => {
    const r: any = right // eslint-disable-line
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const c: any = left.filter((value: any) => {
      // eslint-disable-line
      return leftChecked.indexOf(value.id) !== -1
    })
    setRight(r.concat(c))
    setLeft(not(left, c) as any) // eslint-disable-line
    setChecked(not(checked, leftChecked))
  }

  const handleCheckedLeft = (): void => {
    const l: any = left // eslint-disable-line
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const c: any = right.filter((value: any) => {
      // eslint-disable-line
      return rightChecked.indexOf(value.id) !== -1
    })
    setLeft(l.concat(c))
    setRight(not(right, c) as any) // eslint-disable-line
    setChecked(not(checked, rightChecked))
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid item>
        <CustomList
          items={left}
          title='Choices'
          checked={checked}
          checkboxProps={checkboxProps}
          handleToggleAll={handleToggleAll}
          numberOfChecked={numberOfChecked}
          handleToggle={handleToggle}
        />
      </Grid>
      <Grid item>
        <Grid container direction='column' alignItems='center'>
          <Button
            variant='outlined'
            size='small'
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label='move selected right'
          >
            &gt;
          </Button>
          <Button
            variant='outlined'
            size='small'
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label='move selected left'
          >
            &lt;
          </Button>
        </Grid>
      </Grid>

      <Grid item>
        <CustomList
          items={right}
          title='Chosen'
          checked={checked}
          checkboxProps={checkboxProps}
          handleToggleAll={handleToggleAll}
          numberOfChecked={numberOfChecked}
          handleToggle={handleToggle}
        />
      </Grid>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      margin: 'auto'
    },
    button: {
      margin: theme.spacing(0.5, 0)
    }
  })
})
