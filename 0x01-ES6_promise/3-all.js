import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => new Promise((resolve, reject) => {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      const { body } = photoResult;
      const { firstName, lastName } = userResult;

      console.log(`${body[0]} ${firstName[1]} ${lastName[2]}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
});

export default handleProfileSignup;
