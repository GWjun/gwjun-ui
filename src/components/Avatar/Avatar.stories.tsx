import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '.';

const meta = {
  title: 'Common/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Avatar component that displays a profile image, with a customizable size.',
      },
    },
  },
  argTypes: {
    src: {
      description: 'Source URL of the avatar image.',
      control: 'text',
    },
    size: {
      description: 'Size of the avatar in pixels.',
      control: 'number',
    },
    className: {
      description: 'Additional class names for styling the avatar.',
      control: 'text',
    },
  },
  args: {
    src: '/default-profile.svg',
    size: 50,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 50,
  },
};

export const CustomSize: Story = {
  args: {
    size: 100,
  },
};
