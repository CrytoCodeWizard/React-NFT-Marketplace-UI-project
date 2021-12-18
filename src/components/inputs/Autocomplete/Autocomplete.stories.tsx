import React from 'react'
import { Story } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Autocomplete, AutocompleteProps } from './Autocomplete'
import { TextField, Checkbox } from '../../index'

export default {
  title: 'Inputs/Autocomplete',
  component: Autocomplete,
  argTypes: {
    id: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    autoComplete: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    multiple: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      defaultValue: 'medium',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'medium' }
      }
    },
    limitTags: {
      control: 'number',
      defaultValue: -1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: -1 }
      }
    },
    blurOnSelect: {
      control: { type: 'select' },
      options: ['mouse', 'touch', false],
      defaultValue: 'false',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'false' }
      }
    },
    autoHighlight: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    autoSelect: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    clearOnBlur: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    clearOnEscape: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    clearText: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    closeText: {
      control: { type: 'text' },
      table: { type: { summary: 'string' } }
    },
    defaultValue: {
      control: { type: 'any' },
      table: { type: { summary: 'props.multiple ? [] : null' } }
    },
    disableClearable: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disableCloseOnSelect: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabledItemsFocusable: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disableListWrap: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disablePortal: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    filterSelectedOptions: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    freeSolo: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    fullWidth: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    includeInputInList: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  },
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FquPS1rVsEsTOPxR8SCw04/%F0%9F%8E%A8-Design-System?node-id=392%3A24801'
    }
  }
}

const options = [
  'A Clockwork Orange',
  'Like Stars on Earth',
  'Braveheart',
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'The Dark Knight',
  '12 Angry Men',
  'Forrest Gump',
  'Inception',
  'Pulp Fiction',
  'The Lord of the Rings: The Two Towers'
]

const Template: Story<AutocompleteProps> = (args) => {
  return <Autocomplete {...args} />
}

export const Default = Template.bind({})
Default.args = {
  options,
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const DisableClearable = Template.bind({})
DisableClearable.args = {
  disableClearable: true,
  options,
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const AutoSelect = Template.bind({})
AutoSelect.args = {
  autoSelect: true,
  options,
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  options,
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const BlurOnSelect = Template.bind({})
BlurOnSelect.args = {
  blurOnSelect: true,
  options,
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const Grouped = Template.bind({})
Grouped.args = {
  groupBy: (option): string => {
    return option[0]
  },
  options: options.sort((a, b) => {
    return -b[0].localeCompare(a[0])
  }),
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const DisabledOptions = Template.bind({})
DisabledOptions.args = {
  options,
  getOptionDisabled: (option): boolean => {
    return ['B', 'F', 'P'].includes(option[0])
  },
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const Multiple = Template.bind({})
Multiple.args = {
  multiple: true,
  options,
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const MultipleCheckboxes = Template.bind({})
MultipleCheckboxes.args = {
  multiple: true,
  options,
  renderOption: (props, option, { selected }): React.ReactNode => {
    return (
      <li {...props}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {option}
      </li>
    )
  },
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}

export const LimitTags = Template.bind({})
LimitTags.args = {
  multiple: true,
  limitTags: 2,
  options,
  renderInput: (params): React.ReactNode => {
    return <TextField {...params} label='Movies' />
  }
}
