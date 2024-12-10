import type { Meta, StoryObj } from '@storybook/react';
import MenuItem from '.';

const meta = {
  title: 'Common/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'MenuItem component that handles click and "Enter" key press interactions.',
      },
    },
  },
  argTypes: {
    onClick: {
      description: 'Callback function triggered when the item is clicked.',
      action: 'clicked',
    },
    children: {
      description: 'Content to be rendered inside the MenuItem.',
      control: 'text',
    },
  },
  args: {
    children: 'Menu Item',
    onClick: () => alert('Menu item clicked!'),
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
