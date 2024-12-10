import type { Meta, StoryObj } from '@storybook/react';
import Menu from '.';

const meta = {
  title: 'Common/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Menu component that supports toggling visibility and handles backdrop click or Escape key to close.',
      },
    },
  },
  argTypes: {
    isOpen: {
      description: 'Controls the visibility of the menu.',
      control: 'boolean',
    },
    onClose: {
      description: 'Callback function triggered when the menu is closed.',
      action: 'closed',
    },
    children: {
      description: 'Content to render inside the menu.',
      control: 'text',
    },
    className: {
      description: 'Additional class names for styling the menu.',
      control: 'text',
    },
  },
  args: {
    isOpen: true,
    children: (
      <>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </>
    ),
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('Menu closed!'),
  },
  render: (args) => (
    <div style={{ position: 'relative', width: '300px', height: '250px' }}>
      <Menu {...args} />
    </div>
  ),
};
