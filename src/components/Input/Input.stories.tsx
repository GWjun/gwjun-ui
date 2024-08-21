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
        component: 'variant, size에 따른 input 컴포넌트',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'input의 형식. 형식에 따라 border 스타일이 정의됨.',
      control: 'select',
      options: ['default', 'text'],
      table: {
        type: {
          summary: 'default | text',
        },
      },
    },
    size: {
      description: 'input의 크기. 사이즈에 따라 padding 값이 상이함.',
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
