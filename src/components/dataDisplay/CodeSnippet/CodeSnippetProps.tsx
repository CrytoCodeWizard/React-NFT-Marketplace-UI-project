import React from 'react'

export interface CodeSnippetProps {
  value: string
  language?: string
  fileName?: string
  syntaxHighlighterStyle?: React.CSSProperties
}
