const express = require('express');

const verify = async (req, res) => {
    const { verificationToken } = req.params;
  
    // Find the user with the provided verification token
    const user = await User.findOne({ verificationToken });
  
    if (user && !user.verified) {
      // Mark the user as verified
      await User.findOneAndUpdate({ verificationToken }, { verified: true });
  
      return res.status(200).json('User verified successfully');
    }
  
    return res.status(400).json('Invalid or already verified token');
};

module.exports = router;
