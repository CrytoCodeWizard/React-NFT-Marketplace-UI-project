import React from 'react'

export const onClickOutsideHook = (
  ref: React.RefObject<HTMLDivElement> | null,
  callback: () => void
  // eslint-disable-next-line function-paren-newline
): (() => void) => {
  // Hook get from https://stackoverflow.com/a/42234988/8583669

  const handleClickOutside = (event: MouseEvent): void => {
    if (ref?.current && !ref.current.contains(event.target as Node)) {
      callback()
    }
  }
  // Bind the event listener
  document.addEventListener('mousedown', handleClickOutside)
  return (): void => {
    // Unbind the event listener on clean up
    document.removeEventListener('mousedown', handleClickOutside)
  }
}
