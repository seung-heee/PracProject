// 데이터 타입 명시
var stdId = 1;
var stdName = '승희';
var age = 24;
var gender = 'female';
var course = 'TypeScript';
var completed = false;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 1192;
        this.stdName = 'heee';
        this.age = 24;
        this.gender = '여';
        this.course = 'javascript';
        this.completed = false;
    }
    // 오버라이딩 해줘야함.
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('승희');
// 학생 정보 구하기
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'seunghee',
        // age : 22,
        gender: '여',
        course: 'TypeScript',
        completed: false,
    };
}
;
// 학생 정보 수정하기
function setInfo(student) {
    console.log('setInfo : ', student);
}
var std = {
    stdId: 1192,
    stdName: 'heee',
    age: 24,
    gender: '여',
    course: 'javascript',
    completed: false,
};
// setInfo(std)
// console.log(getInfo(5678));
