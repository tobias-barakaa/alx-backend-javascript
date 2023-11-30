import ClassRoom from './0-classroom';

const initializeRooms = (classRoom) => {
  const newClass = new ClassRoom(classRoom);
  const classAdd = [];

  newClass._maxStudentsSize = 19;
  classAdd.push(newClass);

  const newClassCopy1 = { ...newClass };
  newClassCopy1._maxStudentsSize = 20;
  classAdd.push(newClassCopy1);

  const newClassCopy2 = { ...newClass };
  newClassCopy2._maxStudentsSize = 34;
  classAdd.push(newClassCopy2);

  return classAdd;
};

export default initializeRooms;
