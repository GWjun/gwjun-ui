import type { Meta, StoryObj } from '@storybook/react';
import Label from '.';

const meta = {
  title: 'Common/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Label component that accepts `id` and `required` as props.',
      },
    },
  },
  argTypes: {
    id: {
      description: 'ID value that specifies the associated element.',
    },
    required: {
      description: 'Boolean value indicating whether the field is required.',
      control: 'boolean',
    },
    children: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'Email',
    children: 'Email',
    required: false,
  },
};
