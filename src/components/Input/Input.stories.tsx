import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Input component with different variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      description:
        'Defines the input style. Border styles are determined based on the variant.',
      control: 'select',
      options: ['default', 'text'],
      table: {
        type: {
          summary: 'default | text',
        },
      },
    },
    size: {
      description:
        'Defines the input size. Padding values vary depending on the size.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'sm | md | lg' },
      },
    },
    placeholder: {
      table: { disable: true },
    },
  },
  args: {
    placeholder: 'Email',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Label: Story = {
  args: {
    id: 'Email',
    label: 'Email',
    required: true,
  },
};

export const File: Story = {
  args: {
    type: 'file',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
