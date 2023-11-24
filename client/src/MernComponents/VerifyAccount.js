import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VerifyAccount = ({ match }) => {
  const [verificationStatus, setVerificationStatus] = useState('');

  useEffect(() => {
    const { username } = match.params;

    const verifyUser = async () => {
      try {
        const response = await axios.post(`userAPI/verify`, { username });

        if (response.status === 200) {
          setVerificationStatus('User verified successfully');
        } else {
          setVerificationStatus('Failed to verify user');
        }
      } catch (error) {
        console.error('Error verifying user:', error.message);
        setVerificationStatus('Error verifying user');
      }
    };

    verifyUser();
  }, [match.params]);

  return (
    <div>
      <h1>verifying</h1>
    </div>
  );
};

export default VerifyAccount;