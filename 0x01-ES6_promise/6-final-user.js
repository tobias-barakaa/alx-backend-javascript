import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

const handleProfileSignup = async (firstName, lastName, filename) => {
  const signUpResult = await signUpUser(firstName, lastName);
  const photoResult = await uploadPhoto(filename);
  const results = [signUpResult, photoResult];
  const newData = [];
  return await Promise.allSettled(results).then((res) =>
    res.map((result) => (newData.push({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.message,
    })))
  );
};
export default handleProfileSignup;
