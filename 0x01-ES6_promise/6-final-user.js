import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export async function handleProfileSignup(firstName, lastName, filename) {
  const signUpResult = await signUpUser(firstName, lastName);
  const photoResult = await uploadPhoto(filename);

  return [
    {
      status: signUpResult.status,
      value: signUpResult.value,
    },
    {
      status: photoResult.status,
      value: photoResult.value,
    }
  ];
}
