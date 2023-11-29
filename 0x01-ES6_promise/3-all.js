import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => new Promise((resolve, reject) => {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      resolve({
        photoBody: photoResult.body,
        firstName: userResult.firstName,
        lastName: userResult.lastName,
      });
    })
    .catch((error) => {
      reject({ message: 'Signup system offline', error });
    });
});

export default handleProfileSignup;
