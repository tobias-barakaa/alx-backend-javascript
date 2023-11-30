import ClassRoom from './0-classroom.js';

const initializeRooms = (classRoom) => {
    const newClass = new ClassRoom(classRoom);
    const classAdd = [];

    newClass._maxStudentsSize = 19;
    classAdd.push(newClass);

    newClass._maxStudentsSize = 20;
    classAdd.push(newClass);

    newClass._maxStudentsSize = 34;
    classAdd.push(newClass);

    return classAdd;
}

export default initializeRooms;
