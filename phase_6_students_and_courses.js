const Student = function Student (firstName, lastName, courses = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = courses;

};

Student.prototype.name = function () {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function (coursy) {
  this.courses.forEach((course) => {
    if (course.conflictsWith(coursy)){
      return;
    }
  });
  this.courses.push(coursy);
};

Student.prototype.courseLoad = function () {
  this.courses.forEach((course) => {
    console.log(`${course.name} : ${course.credits}`);
  });
};


const Course = function Course (name, department, credits, setDays, timeBlock) {
  // const weekdays = {
  //   monday: 'Monday',
  //   tuesday: 'Tuesday',
  //   wednesday: 'Wednesday',
  //   thursday: 'Thursday',
  //   friday: 'Friday'
  // };
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.setDays = setDays;
  this.timeBlock = timeBlock;
  this.students = [];
};

Course.prototype.addStudent = function(student) {
  this.students.push(student);
};

Course.prototype.conflictsWith = function(course) {
  for (var i = 0; i < course.setDays.length; i++) {
    if (this.setDays.includes(course.setDays[i])
        && this.timeBlock.includes(course.timeBlock[i])) {
      return 'DENIED';
    }
  }
  return false;
};


let student1 = new Student('al', 'mo');
let math = new Course('Math 101', 'Math', 4.0);

student1.enroll(math);
student1.courseLoad();
