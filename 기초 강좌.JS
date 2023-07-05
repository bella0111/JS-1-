// 변수
let grade = "F";
// 1000 lines...
grade = "gogle";
// 변수를 선언 할 떄, const = 절대로 바뀌지 않는 상수이다. (수정도 되지 않는다.)
// 변할 수 있는 값은 let으로 선언해야한다.
const MY_HOME = "..." // 1. 변수는 문자와 숫자 $와 _ 만 사용가능하다.
let 1stGrade = 'A+'; // 2. 첫글자에 숫자가 될 수 없습니다.
let let = 99; // 3. 에약어는 사용할 수 없습니다.
const MAX_SIZE = 99; // 4. 가급적 상수는 대문자로 알려줘야 한다.
let a = 1;
let userNumber = 1; // 5. 변수명은 읽기 쉽고 이해할 수 있게 선언한다.

// 자료형
const name = 'Mike'; // 문자형 String
const age = 30;

const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy.";
const message2 = 'I\'m a boy.' // '\'을 넣으면 특수 문자로 인식한다.

const message3 = 'My name is ${name}';
console.log(message3);

const message4 = '나는 ${30+1}살 입니다.';
console.log(message4); // 출력 값은 '나는 31살 입니다.' 가 나오게 된다.

const age2 = 30; // 숫자형 Number
const PI = 3.14

console.log(1+2); // 더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 4); // % 나머지

const x = 1/0; // 값은?
console.log(x) // Infinity ( 무한대 )

const name6 = "Mike"
const y = name6/2;
console.log(y) // Nan = Not a number = 숫자가 아니다.

// Boolean ( 참 과 거짓 )
const a1 = true; // 참
const b1 = false; // 거짓

const name7 = "Mike";
const age7 = 30;
console.log(name7 == 'Mike') // 값은 true
console.log(age7 > 40) // 값은 false

// null ( 값이 없는 ) 과 undefined ( 값이 결정 되지 않는 )
let age8;
console.log(age8) // 값은 undefined

let user = null; 

// typeof 연산자 = 데이터에 대한 자료형을 알려주는 연산자
const name8 = "Mike";

console.log(typeof3);
console.log(typeof name9);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);
console.log(typeof undefined);


// alert = 알려줌
//prompt = 입력 받음
// confirm = 확인 받음
const nmae = prompt("이름을 입력하세요.");
alert("환영합니다, " + name10 + "님");

const name11 = prompt("예약일을 입력해주세요", "2020-10-") // prompt는 두개 인수 입력 가능하다.

//confirm() = 확인받고 싶을 때 쓰는 함수입니다.
const isAdult = confirm("당신은 성인 입니까?") // confirm의 함수는 취소 버튼이 존재합니다.

console.log(isAdult) // 확인 버튼을 누르면 값은 true 가 나오고 취소 버튼을  누르면 false가 뜨게 된다.


// 형 변환 
const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore) / 2;
console.log(result);  // 값은 4540
// prompt의 값은 90 과 80 즉, 문자형이다. 문자형은 더해주는게 아니라 이어주기 때문에 4540이 나오게 된다.


// String() = 문자형으로 변환한다.
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
)

// Number() = 숫자형으로 변환한다.
console.log(
    Number("1234"), // 값은 1234
    Number("1234abcdef"), // 값은 Nan
    Number(true), // 값은 1
    Number(false) // 값은 0
)

// Boolean() = 불린형(참과 거짓)으로 변환한다.
// false 에서 숫자 0, 빈 문자열 ", null, underfined, NaN 빼고 모두 "true"

*주의사항
Number(null) // 0 
Number(undefined) // NaN
Number(0) // false
Number('0') // true
Number('') // fasle
Number(' ') // true

// 기본 연산자
// + 더하기, - 빼기, * 곱하기, / 나누기, % 나머지
// 홀수:x%2 = 1, 짝수:Y%2 = 0 => 어떤 값이 들어와도 5를 넘기면 안된다.

// 거듭제곱
const num = 2 ** 3;
console.log(num); // 8

//우선 순위
// * /     >       + -

// 증가 연산자(++), 감소 연산자(--)
let num = 10;
let result = num++;
console.log(result); // 값은 10

// 비교 연산자 => <, >, <=, >=, ==, !=
console.log(10>5);
console.log(10 == 5); // 동등연산자 (==)
console.log(10 != 5);

// 동등 연산자
const a2 = 1;
const b = "1",
console.log(a2 === b); // 값은 true => 일치 연산자

// if문 과 else 문
const age = 30;
if(age > 19) {
    console.log('환영합니다.');
}
if(age > 19) {
    console.log("안녕히 가세요.");
}
console.log('------------------------------')
//  이 다음 코드랑 값은 같다.
const age = 30;
if(age > 19) {
    console.log('환영합니다.');
}
else {
    console.log("안녕히 가세요.");
}
console.log('------------------------------')

// 추가 요구 사항: 19살이면 수능 잘 치세요 라는 문구를 보여주세요 ( a === 19)
const age = 30;
if(age > 19) {
    console.log('환영합니다.');
}else if(age === 19){
    console.log('수능 잘 치세요.')
}
else {
    console.log("안녕히 가세요.");
}
console.log('------------------------------')


// 논리 연산자 => || (OR), &&(AND), !(NOT)
// || (OR) => 여러개 중 하나라도 true 면 true, 즉, 모든 값이 false 일떄만 false를 반환한다.
// && (AND) => 모든 값이 true면 true 즉, false 면 false로 반환한다.
// ! (NOT) => true 면 false 이고 false 이면 true 이다.

// 이름이 Mike 이고, 성인이면 통과인 문제 이다.
const name13 = "Mike"
const age9 = 30;

if (name13 === 'Tom' || age9 > 19) {
    console.log('통과');
} 
const name14 = "Mike"
const age10 = 30;

if (name14 === 'Tom' || age9 > 19) {
    console.log('통과');
} else {
    console.log('돌아가.')
}

// 나이를 입력받아 성인이 아니면 돌아가 라는 코드 만들기.
const age15 = prompt('나이가..?');
const isAdult = age > 19;

if (isAdult) {
    console.log('돌아가....')
}
console.log('-----------------------------')

// 우선 순위 / 남자이고, 이름이 Tom이거나 성인이면 통과
const gender = 'F';
const name16 = Jane;
const isAdult = true;

if(gender == 'M' && name16 === 'Mike' || isAdult) {
    console.log('통과')
} else {
    console,log('돌아가.')
}