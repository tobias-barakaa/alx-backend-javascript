import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  return new Promise((resolve, reject) => {
    uploadPhoto()
      .then((photoResult) => {
        const { body } = photoResult;

        createUser()
          .then((userResult) => {
            const { firstName, lastName } = userResult;

            resolve(`${body} ${firstName} ${lastName}`);
          })
          .catch((error) => {
            reject('Signup system offline',error);
          });
      });
  });
}
export default handleProfileSignup;
