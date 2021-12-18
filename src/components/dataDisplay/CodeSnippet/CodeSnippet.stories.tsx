import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CodeSnippetProps } from './CodeSnippetProps'
import { CodeSnippet } from './CodeSnippet'

export default {
  title: 'Data Display/CodeSnippet',
  component: CodeSnippet,
  argTypes: {},
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: ''
    }
  }
}

const ValueSample = `{
  "squadName": "Super hero squad",
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "powers": [
        "Radiation resistance",
      ]
    }
  ]
}`

const Template: Story<CodeSnippetProps> = (args) => {
  return <CodeSnippet {...args} />
}

export const Default = Template.bind({})
Default.args = {
  language: 'json',
  value: ValueSample,
  fileName: 'Happy Programmers day'
}
