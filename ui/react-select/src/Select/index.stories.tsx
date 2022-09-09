import { Select } from './index'
import { SelectProps } from './types'

import { Meta, Story } from '@storybook/react'
import { dummyComponents } from '../themes/dummyComponents'

export default {
  title: 'Atoms/Select',
  component: Select,
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
  },
  argTypes: {},
} as Meta

const Template: Story<SelectProps> = (args) => {
  return (
    <>
      <div className="card">
        <Select {...args} components={dummyComponents} />
      </div>
    </>
  )
}

export const Playground = Template.bind({})

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  canSelectMultipleValues: true,
}
