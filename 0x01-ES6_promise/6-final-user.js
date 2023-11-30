import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, filename) {
  try {
    const signUpResult = await signUpUser(firstName, lastName);
    const photoResult = await uploadPhoto(filename);

    const allData = await Promise.allSettled([signUpResult, photoResult]);
    const newData = allData.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));

    return newData;
  } catch (error) {
    return [{ status: 'rejected', value: error.message }];
  }
}
