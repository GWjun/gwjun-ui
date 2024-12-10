import type { Meta, StoryObj } from '@storybook/react';
import Modal from '.';

const meta = {
  title: 'Common/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal component with optional backdrop click handling and ESC key closing.',
      },
    },
  },
  argTypes: {
    isOpen: {
      description: 'Controls the visibility of the modal.',
      control: 'boolean',
    },
    onClose: {
      description: 'Callback function triggered when the modal is closed.',
      action: 'closed',
    },
    isBackdropClosable: {
      description:
        'Determines if clicking on the backdrop should close the modal.',
      control: 'boolean',
    },
    children: {
      description: 'Content to be rendered inside the modal.',
      control: 'text',
    },
  },
  args: {
    isOpen: false,
    isBackdropClosable: true,
    children: 'This is a modal content',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    onClose: () => alert('Modal closed!'),
    isBackdropClosable: true,
    children: 'This is a modal.',
  },
};
