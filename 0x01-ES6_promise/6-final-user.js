import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export async function handleProfileSignup(firstName, lastName, filename) {
  const signUpResult = await signUpUser(firstName, lastName); 
  const photoResult = await uploadPhoto(filename); 

  const allData = { 
    photoResult,
    signUpResult,
  };

  Promise.allSettled(allData).then((data) => { 
    const newData = []; 

    for (const result of data) { 
      newData.push({ 
        status: result.status, 
        value: result.status === 'fulfilled' ? result.value : result.reason,
      });
    }
    return newData; 
  });
}
