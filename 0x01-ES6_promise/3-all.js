import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = new Promise((resolve, reject) => {
    uploadPhoto()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });

  const userPromise = new Promise((resolve, reject) => {
    createUser()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });

  Promise.all([photoPromise, userPromise])
    .then(([photoResult, userResult]) => {
      console.log(photoResult.body[0], userResult.firstName[1], userResult.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}

export default handleProfileSignup();
