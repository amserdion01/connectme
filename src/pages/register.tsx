import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import type { FormData } from '~/components/user/RegistrationForm';
import RegistrationForm from '~/components/user/RegistrationForm';
import { api } from '~/utils/api';

const Register: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const saveUserData = api.user.saveUserData.useMutation();
  const { data: session } = useSession();

  const handleFormSubmit = async (formData: FormData) => {
    if (!session) {
      setError('You must be logged in to save data');
      return;
    }
    
    try {
      await saveUserData.mutateAsync({ ...formData, userId: session.user.id });
      router.push('/profile');
    } catch (error) {
      console.error(error);
      setError('Error saving user data');
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <RegistrationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Register;
