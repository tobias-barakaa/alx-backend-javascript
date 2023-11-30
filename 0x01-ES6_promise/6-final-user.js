import signUpUser from "./4-user-promise";
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ])
    .then(([profile, photo]) => {
      return {
        profile,
        photo
      };
    })
    .catch((error) => {
      throw new Error(error);
    });
}
