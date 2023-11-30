import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

const handleProfileSignup = async (firstName, lastName, filename) => {
  const signUpResult = await signUpUser(firstName, lastName);
  const photoResult = await uploadPhoto(filename);

  const results = [signUpResult, photoResult].map((res) => ({
    status: res.status,
    value: res.status === 'fulfilled' ? res.value : res.reason.message,
  }));

  return results;
};

export default handleProfileSignup;
