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
        component: 'id, required를 props으로 받는 label 컴포넌트',
      },
    },
  },
  argTypes: {
    id: {
      description: '연결될 요소를 나태내는 id 값',
    },
    required: {
      description: '필수 요소임을 나태내는 boolean 값',
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
