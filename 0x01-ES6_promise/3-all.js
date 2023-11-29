import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => new Promise((resolve, reject) => {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(
        photoResult.body,
        userResult.firstName,
        userResult.lastName,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
});

export default handleProfileSignup;
