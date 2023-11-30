import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

const handleProfileSignup = async (firstName, lastName, filename) => {
  try {
    const signUpResult = await signUpUser(firstName, lastName);
    const photoResult = await uploadPhoto(filename);

    const results = await Promise.allSettled([signUpResult, photoResult]);

    const data = results.map((res) => ({
      status: res.status,
      value: res.status === 'fulfilled' ? res.value : res.reason,
    }));

    return data;
  } catch (error) {
    return [
      {
        status: 'rejected',
        value: error.toString(),
      },
    ];
  }
};

export default handleProfileSignup;
