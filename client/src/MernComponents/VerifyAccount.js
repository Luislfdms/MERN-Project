import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VerifyAccount = () => {
  const [verificationStatus, setVerificationStatus] = useState('');
  const { username } = useParams();
  console.log('In verify account')

  useEffect(() => {
    console.log('Username:', username);
    const verifyUser = async () => {
      try {
        const response = await axios.get(`/userAPI/verify?username=${username}`);
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
  }, [username]);

  return (
    <div>
      <h1>verifying</h1>
      <p>{ verificationStatus }</p>
    </div>
  );
};

export default VerifyAccount;