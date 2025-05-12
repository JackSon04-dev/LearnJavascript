function Student(ID, fullName, birthYear, homeTown) {
  this.ID = ID;
  this.fullName = fullName;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // phương thức
  this.showInfor = function () {
    return `${this.fullName} ${this.birthYear}`;
  };
}

const SV1 = new Student("0012", "Ngu Văn Ngố", 2003, "HCM");
const SV2 = new Student("0014", "Ngu Văn Ngư", 2004, "HN");

console.log(SV1);
console.log(SV2.showInfor());
//ES6
class SinhVien {
  // thuộc tính
  constructor(ID, fullName, birthYear, homeTown, nationality = "VietNam") {
    this.ID = ID;
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
    this.nationality = nationality;
  }
  // phương thức
  showInfor() {
    return `${this.fullName} sinh năm ${this.birthYear}`;
  }
  calcAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }
}
// add object
const SV3 = new SinhVien("0013", "Ngu Thi Lò", 2005, "HCM");
const SV4 = new SinhVien("0014", "Ngu Cy Cít", 2007, "Đà Lạt");
// show object
console.log(SV3);
// show method of object
console.log("Infor SV3: " + SV3.showInfor());
// compare prototype between class and it's object
console.log(SinhVien.prototype === Object.getPrototypeOf(SV3));
// show method of object just add in class
console.log(SV3.calcAge());
// add nationality prototype in SV3 object
SV3.nationality = "Taiwan";
SinhVien.prototype.nationality = "VietNam";
console.log("nationality of SV3 is " + SV3.nationality);
console.log(SV4.nationality);
console.log(SV3);
console.log(SV4);
