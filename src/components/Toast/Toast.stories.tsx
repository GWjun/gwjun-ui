import type { Meta, StoryObj } from '@storybook/react';
import Toast from '.';

const meta = {
  title: 'Common/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast component for displaying brief feedback messages.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Defines the style of the toast.',
      control: 'select',
      options: ['primary', 'success', 'error', 'alert'],
      table: {
        type: {
          summary: 'primary | success | error | alert',
        },
      },
    },
    onClose: {
      description:
        'Callback function triggered when the close button is clicked.',
      action: 'closed',
    },
    children: {
      description: 'Content of the toast message.',
      control: 'text',
    },
    className: {
      description: 'Additional class names for styling the toast.',
      control: 'text',
    },
  },
  args: {
    variant: 'primary',
    children: 'This is a toast message.',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    onClose: () => alert('Toast closed!'),
    children: 'This is a primary toast.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    onClose: () => alert('Toast closed!'),
    children: 'This is a success toast.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    onClose: () => alert('Toast closed!'),
    children: 'This is an error toast.',
  },
};

export const Alert: Story = {
  args: {
    variant: 'alert',
    onClose: () => alert('Toast closed!'),
    children: 'This is an alert toast.',
  },
};
