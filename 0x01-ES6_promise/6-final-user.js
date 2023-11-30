export default function handleProfileSignup(firstName, lastName, filename) {
  const signUpResult = signUpUser(firstName, lastName); 
  const photoResult = uploadPhoto(filename); 

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
