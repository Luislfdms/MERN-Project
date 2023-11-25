import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyAccount = () => {
  const [verificationStatus, setVerificationStatus] = useState('');
  const { verificationToken } = useParams();
  const navigate = useNavigate();
  console.log('In verify account')

  useEffect(() => {
    console.log('verificationToken:', verificationToken);
    const verifyUser = async () => {
      try {
        const response = await axios.get(`/userAPI/verify?verificationToken=${verificationToken}`);
        if (response.status === 200) {
          setVerificationStatus('User verified successfully');
          navigate('/login')
        } else {
          setVerificationStatus('Failed to verify user');
        }
      } catch (error) {
        console.error('Error verifying user:', error.message);
        setVerificationStatus('Error verifying user');
      }
    };

    verifyUser();
  }, [verificationToken]);

  return (
    <div>
      <h1>verifying</h1>
      <p>{ verificationStatus }</p>
    </div>
  );
};

export default VerifyAccount;