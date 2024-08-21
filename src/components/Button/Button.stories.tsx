import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'variant, size에 따른 button 컴포넌트',
      },
    },
  },
  argTypes: {
    variant: {
      description:
        'button 형식. 형식에 따라 color, border 등의 스타일이 정의됨.',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text', 'destructive'],
      table: {
        type: {
          summary: 'primary | secondary | outline | text | destructive',
        },
      },
    },
    size: {
      description: 'button 크기. 사이즈에 따라 padding 값이 상이함.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'sm | md | lg' },
      },
    },
    asChild: {
      description:
        'button 이외의 태그를 child로 전달하면, 해당 태그로서 동작함.',
      control: { disable: true },
      table: {
        type: { summary: 'false | true' },
      },
    },
    children: {
      table: { disable: true },
    },
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
