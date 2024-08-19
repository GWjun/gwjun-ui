import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Common/Button',
  component: Button,
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
        '버튼의 형식. 형식에 따라 color, border 등의 스타일이 정의됨.',
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text', 'destructive'],
      table: {
        type: {
          summary: 'primary | secondary | outline | text | destructive',
        },
      },
    },
    size: {
      description:
        '버튼의 크기. 3가지 사이즈가 존재하며, 사이즈에 따라 padding 값이 상이함.',
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
  tags: ['autodocs'],
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
