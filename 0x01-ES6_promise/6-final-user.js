import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, filename) => {
  const user = await signUpUser(firstName, lastName);
  const newData = [];
  try {
    newData.push({ status: 'fulfilled', value: user });
    await uploadPhoto(filename);
  } catch (error) {
    newData.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return newData;
};
export default handleProfileSignup;
