interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }
  
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }
  
  const StudentClass: StudentClassConstructor = class StudentClassImpl implements StudentClass {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  };
  
  const studentInstance = new StudentClass('John', 'Doe');
  console.log(studentInstance.workOnHomework());
  console.log(studentInstance.displayName());
