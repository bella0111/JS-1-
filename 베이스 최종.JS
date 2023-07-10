// 반복문 (for, loop)
// loop => 동일한 작업을 여러번 반복하는 반복문입니다.
// 1부터 10까지 로드 하는 문제 입니다.
for (let i = 0; i < 10; i++) {
    console.log (i + 1)
}

// while => 반복 횟수보다는 조건이 만족되는 경우에만 실행합니다.
let e = 0;
while(e<10) {
    console.log(e);
    e++;
}

// do .. while  while 반복문을 썼을 때, 조건을 벗어나면 1번도 실행되지 않을 수 있다.
// do 블록 안에 있는 코드를 먼저 실행하고, while 뒤에 있는 조건을 비교해서 '참'인 경우에 다시 do 블록의 코드를 실행한다. 
let i = 0;
do{
    //코드
    i++;
} while(i<10)

// break => 멈추고 빠져나온 반복문이다.
while (true) {
    let answer = confirm('계속 할까요?');
    if(!answer){
        break;
    }
}

// continue => 멈추고 다음 반복으로 진행하는 반복문이다.
// 짝수만 가능한 문제이다.
for(let i = 0; i <10; i++) {
    if(i%2){
        continue;
    }
    console.log(i)
}


//switch 
//switch 형식
switch(평가) {
    case A: // A일때 코드
    case B: // B일때 코드
}
if (평가 == A) { // A일떄 코드
} else if(평가 == B) {
    // B일때 코드
}

// 사과: 100원, 바나나 : 200원, 키위 : 300원, 멜론 ; 500원, 수박 : 500원 
//사고 싶은 과일 물어보고 가격 알려주는 문제입니다.
let fruit = prompt('무슨 과일을 사고 싶나요?')

switch(fruit){
    case '사과' :
        console.log('100원 입니다.');
        break;
    case '바나나' :
        console.log('200원 입니다.');
        break;
    case '키위' :
         console.log('300원 입니다.');
         break;
    case '멜론' :
        console.log('500원 입니다.');
        break;
    case '수박' :
        console.log('500원 입니다.');
        break;
    default:
        console.log('그런 과일은 없습니다.')
}

// 함수 => console, alert, confirm
function sayHello(name) {
// 함수    함수명 (매개변수)
    console.log('Hello, ${name');
}
sayHello('Mike');

// 함수 작성
function showError() {
    alert('에러가 발생했습니다. 새로고침 해주세요')
}

showError();

// 매개변수가 있는 함수
function sayHello(name){
    const msg = 'Hello, ${name}';
    console.log(msg);
}

sayHello('Mike');
sayHello('Tom');
sayHello('Jane');

function sayHello(name){
    let msg = 'Hello';
    if(name) {
        msg += name
    }
    console.log(msg);
}
sayHello(); // 값은 "Hello"
sayHello('Mike'); // 값은 "HelloMike"

let msg = 'Hello';
console.log('함수 호출 전')
console.log(msg)

function sayHello(name){
    if(name){
        msg += ', ${name}';
    }
    console.log('함수 내부')
      console.log(msg)
}
sayHello('Mike');
console.log('함수 호출 후')
console.log(msg)

// 전역 변수와 지역 변수
let msg1 = "welcome";
console.log(msg)

function sayHello(name){
    let msg1 = "Hello"
    console.log(msg1 + ' ' + name);
}
sayHello('Mike');
console.log(msg)

let name = "Mike";

function sayHello(name){
    console.log(name)
}
sayHello();
sayHello(' Jane');

// return 으로 값 변환한다.
function add(num1, num2){
    return num1 + num2;
}
const result = add(2,3);
console.log(result)

function showError(){
    alert('에러가 발생했습니다.');
}
const result = showError();
console.log(result);
// 함수에 대해 알아야 할 점
// 1. 한번에 한 작업에 집중해야 한다.
// 2. 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍 해야 한다.
showError // 에러를 보여주는 함수
getName // 이름을 얻어옴
createUserData // 유저데이터 생성
checkLogin // 로그인 여부 체크 

// 함수 선언문 : 어디서든 호출 가능하다.
function sayHello(){
    console.log('Hello');
}
sayHello();


// 함수 표현식 = 코드에 도달하면 생성한다.
let sayHello = function(){
    console.log('Hello');
}

// 화살표 함수
let add = function(num1, num2) {
    return num1 + num2;
}
// 바꾼 화살표 함수 (1)
let add =     (num1, num2) => {
    return num1 + num2;
}
// 바꾼 화살표 함수 (2)
let add = (num1,num2) => num1 + num2;
// 인수가 하나라면 (괄호) 생략 할 수 있다.
let sayHello = name11 => 'Hello, ${name}';
// 인수가 하나도 없으면 (괄호)를 생략 할 수 없다.
let showError = () => {
    alert('error!');
}

// 함수 표현식
showError();
let showError = function(){
    console.log('error');
} // 값은 에러
// 함수 선언문
showError();
function showError() {
    console.log("error");
} // 값은 error
// 화살표 함수
const sayHello = (name) => {
    const msg = 'Hello, ${name}'
    console.log(msg);
}
const add = (num1, num2) => {
    num1 + num2;
}


// object - 접근, 추가, 삭제
const superman = {
    name12 : 'clark',
    age : 33, // _______(1)
}
// 접근
superman.name12 // 'clark'
superman['age'] // 33 
// 추가
superman.gender = 'male';
superman['hairColor'] = 'black';
// 삭제 
delete superman.hairColor;

// object - 단축 프로퍼티
// (1)
 const superman = {
    name13, //name13:name13
    age, // age:age
    gender: 'male',
 }
// object - 프로퍼티 존재 여부 확인
//(1)
superman.brithDay; // underfined
'brithDay' in superman; // fal se
'age' in superman; // true

// 객체 for .... in
const Mike = {
    name14: "Make",
    age:30
};
for (x in Mike) {
    console.log(Mike[x]) // Mike['age]
}
// object : 화살표 함수는 일반 함수와는 달리 자기만의 this를 가지지 않았다.
// 화살표 함수 내부에서 this를 사용하면, 그 this는 와부에서 값을 가져왔다.

// metthod
let boy = {
    name: "Mike",
    showName: function() {
        console.log(boy,name15)
    }
}
let man = boy;

// 배열 (array) : 순서가 있는 리스트
// 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있다.
let students = ['철수', '영희', ...'영수'];
console.log(students[0]); //철수
console.log(students[1]);//영희

// length : 배열의 길이
students.length // 30

// push() : 배열 끝에 추가
let days = ['월','화','수'];
days.push('목') // 거나 days.pop()
console.log(days) // ['월','화','수','목']

// unshift : 배열 앞에 제거
days.unshift('일');
console.log(days) // ['일', '월', '화', '수'];

// shift : 배열 앞에 추가
days.shift();
console.log(days) / ['월', '화', '수'];

// 반복문 : for
let days = ['월', '화', '수'];
for(let index = 0; index < days.length; index++) {
    console.log(days[index])
}

// 반복문 : for ... of
let days = ['월', '화', '수'];
for(let day of days) {
    console.log(day)
}

// array
let days = ['mon', 'tue', 'wed'];
days[1] = '화요일'
console.log(days,length);