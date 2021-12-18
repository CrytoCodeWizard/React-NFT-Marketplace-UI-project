export interface SlideProps {
  title: string
  src: string
  link?: string
  children?: React.ReactNode
}

export interface SlidesProps {
  slides: SlideProps[]
}
