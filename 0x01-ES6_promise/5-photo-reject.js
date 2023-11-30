export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject(`${filename} cannot be processed`);
  });
}
