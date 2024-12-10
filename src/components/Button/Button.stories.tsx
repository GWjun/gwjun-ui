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
        component: 'Button component with different variants and sizes.',
      },
    },
  },
  argTypes: {
    variant: {
      description:
        'Defines the button style. Styles such as color and border are determined based on the variant.',
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
        'Defines the button size. Padding values vary depending on the size.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
      table: {
        type: { summary: 'sm | md | lg' },
      },
    },
    asChild: {
      description:
        'Allows the button to function as a different tag if a child tag is passed.',
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
