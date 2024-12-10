import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from '.';

const meta = {
  title: 'Common/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Skeleton component used as a placeholder while loading content.',
      },
    },
  },
  argTypes: {
    children: {
      description:
        'Optional content to render inside the skeleton placeholder.',
      control: 'text',
    },
    className: {
      description: 'Additional class names for styling the skeleton.',
      control: 'text',
    },
  },
  args: {
    children: '',
    className: '',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'loading...',
  },
};
