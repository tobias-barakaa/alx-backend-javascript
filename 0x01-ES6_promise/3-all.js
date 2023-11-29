import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => new Promise((resolve, reject) => {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      const { body } = photoResult;
      const { firstName, lastName } = userResult;

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
});

export default handleProfileSignup;
