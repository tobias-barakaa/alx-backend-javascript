import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    const [photoResponse, userResponse] = await Promise.allSettled([
      photoPromise,
      userPromise,
    ]);

    if (
      photoResponse.status === 'fulfilled'
      && userResponse.status === 'fulfilled'
    ) {
      return {
        photo: photoResponse.value,
        user: userResponse.value,
      };
    }
    return {
      photo: null,
      user: null,
    };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
    return {
      photo: null,
      user: null,
    };
  }
}
export default asyncUploadUser;
