import React from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';

interface DeleteAccountProps {
  userId: string;
}

const DeleteAccount: React.FC<DeleteAccountProps> = ({ userId }) => {
  const router = useRouter();
  const deleteUser = api.user.deleteUser.useMutation()

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        await deleteUser.mutateAsync({ id: userId });
        // Perform additional actions, e.g., logging the user out and redirecting to the home page
        router.push('/');
      } catch (error) {
        console.error('Error deleting user account:', error);
        alert('Error deleting account. Please try again.');
      }
    }
  };

  return (
    <button
      className="rounded bg-red-600 px-10 py-2 text-sm font-medium text-white hover:bg-red-700"
      onClick={handleDeleteAccount}
    >
      Delete Account
    </button>
  );
};

export default DeleteAccount;
