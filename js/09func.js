function computeGrade(kor, eng, math) {
    let avg = 0, result = '';   // 다중변수 선언
    avg = (kor + eng + math)/3
    result = "가";
    if (avg >= 90) {
        result = "수";
    } else if (avg >= 80) {
        result = "우";
    } else if (avg >= 70) {
        result = "미";
    } else if (avg >= 60) {
        result = "양";
    }
    return result;
}
function showAMPM(time) {
    timeHour = time[0]+time[1];
    switch (timeHour < 12) {
        case true:
            return "오전입니다.";
        case false:
            return "오후입니다.";
    }
}
function showStarPuramid2(h) {
    let result = '';
    for (let i = 1; i <= h; i++) {
        //층 반복문
        for (let j = 1; j <= i; j++) {
            //별 반복문
            result +='*';
        }
        result += '<br>';
    }
    document.write(result)
}
function showStarPuramid(h) {
    for (let i = 1; i <= h; i++) {
        //층 반복문
        for (let j = 1; j <= i; j++) {
            //별 반복문
            document.write(`*`);
        }
        document.write("<br>");
    }
}

// 복권 프로그램. 3자리 숫자를 입력받고, 3자리 숫자를 입력하여 두 수의 각 자리를 비교하여 세자리 모두 일치하면 100만원, 아닌 경우 다음기회를 출력.
// 개선점. 입력받는 숫자를 0 ~ 9 까지로 제한하고, 숫자의 중복을 허용하지 않는다. lottokey를 랜덤으로 만들고 0 ~ 9 까지 숫자가 입력되게 한다.
let Lotto = () => {
    let lottokey = prompt("lotto 당첨번호를 입력하세요.");
    let yourkey = prompt(
        "3자리 숫자를 입력하세요 단, 각자리의 숫자는 0~9까지이고, 각 숫자는 중복될 수 없습니다."
    );
    let result = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (yourkey[i] === lottokey[j]) {
                result.push(`일치`);
            }
        }
        if (result[i] !== `일치`) {
            return "아쉽지만, 다음 기회를";
        }
    }
    return "상금 100백만 지급";
}
// 세금 계산 프로그램. 연봉과 결혼 여부를 입력하면 다른 세율을 적용하여 세금을 계산하는 프로그램.
let Tax = () => {
    let ismarried = Number(
        prompt("결혼 여부를 입력하세요. / 미혼 : 0, 기혼 : 1")
    );
    let annualIncome = Number(prompt("연봉을 만원단위로 입력하세요."));
    let result = "";
    switch (ismarried) {
        case 0:
            result =
                annualIncome < 3000
                    ? `내야할 세금은 ${(annualIncome * 10) / 100}만원 입니다.`
                    : `내야할 세금은 ${(annualIncome * 25) / 100}만원 입니다.`;
            return result;
        case 1:
            result =
                annualIncome < 6000
                    ? `내야할 세금은 ${(annualIncome * 15) / 100}만원 입니다.`
                    : `내야할 세금은 ${(annualIncome * 35) / 100}만원 입니다.`;
            return result;
    }
}
// 1~9 사이의 숫자를 입력받아 구구단을 출력하는 프로그램.
let GuGuDan = (dan) => {
    if (typeof dan === "number") {
        if (dan < 1 || dan > 9) {
            console.log(`잘못 입력하셨습니다!!`);
        } else {
            if (dan % 1 !== 0) {
                console.log(`잘못 입력하셨습니다!!`);
            } else {
                for (let i = 1; i < 10; i++) {
                    console.log(`${dan} * ${i} = ${dan * i}`);
                }
            }
        }
    } else {
        console.log(`잘못 입력하셨습니다!!`);
    }
}
// 숫자를 입력받아 자연수 여부를 판독하는 프로그램.
let naturalNumberReader = (num) => {
    if (num > 0 && num % 1 === 0) {
        return "자연수입니다.";
    } else {
        return "자연수가 아닙니다.";
    }
}
// 1~ 100 사이의 숫자를 입력하여, 입력한 숫자를 맞추는 프로그램.
let CatchNumber = (num2) => {
    let num1 = 0;
    while (true) {
        num1 = Number(prompt("1 ~ 100사이의 숫자를 입력하세요."));
        if (num1 > 0 && num1 % 1 === 0) {
            if (num1 > num2) {
                result = "추측한 숫자가 큽니다";
            } else if ((num1 === num2)) {
                result = "빙고! 숫자를 맞혔습니다.";
                console.log(result);
                break;
            } else {
                result = "추측한 숫자가 작습니다.";
            }
            console.log(result);
        } else {
            console.log('잘못된 숫자를 입력했습니다.');
        }
    }
}
// 정수를 하나 입력받아 그 값이 정수, 음수, 0인지 구분하는 프로그램.
// 개선점. 입력받은 값의 정수 여부를 판단해야 한다.
let IndentifyNumber = () => {
    let number = Number(prompt("정수를 입력하세요."));
    if (number > 0) {
        return "양수입니다.";
    } else if (number === 0) {
        return "0입니다.";
    } else {
        return "음수입니다.";
    }
}
// 키보드로 정수를 하나 입력받아 조건에 따라 다른 결과를 출력하는 프로그램.
// 개선점. 입력받은 값의 정수 여부를 판단하여야 한다.
let CheckNumber= () => {
    let number = Number(prompt("정수를 입력하세요."));
    if (number < 10000) {
        return "10000미만";
    } else if (number < 20000) {
        return "10000~20000";
    } else if (number < 30000) {
        return "20000~30000";
    } else {
        return "범위 밖 값";
    }
}
// 임의의 숫자 6자리를 입력하면 신용카드의 종류와 은행정보를 출력하는 프로그램.
// result에 문자열을 더하는 방식으로 풀고 있는데, 배열이나 객체를 이용하는게 더 좋을것 같다.
let CardCheck = () => {
    let number = prompt("정수를 입력하세요.");
    let result = "";
    let num = number[1] + number[2] + number[3] + number[4] + number[5]
    if (number[0] === '4') {
        result += "비자카드, ";
        switch (num) {
            case '04825':
                result += "비씨카드";
                break;
            case '38676':
                result += "신한카드";
                break;
            case '57973':
                result += "국민은행";
                break;
        }
    } else if (number[0] === '5') {
        result += "마스타카드, Maestro, ";
        switch (num) {
            case '15594':
                result += "신한카드";
                break;
            case '24353':
                result += "외한카드";
                break;
            case '40926':
                result += "국민은행";
                break;
        }
    } else if (number[0] + number[1] === '35') {
        result += "JCB카드, ";
        num = number[2] + number[3] + number[4] + number[5];
        switch (num) {
            case '6317':
                result += "NH농협카드";
                break;
            case '6901':
                result += "신한카드";
                break;
            case '6912':
                result += "KB국민카드";
                break;
        }
    }
    return result;
}
// 문자열 내장함수 사용
let CardCheck2 = () => {
    let number = prompt("정수를 입력하세요.");
    let result = "";
    let num = number.slice(1);
    if (number.at(0) === '4') {
        result += "비자카드, ";
        switch (num) {
            case '04825':
                result += "비씨카드";
                break;
            case '38676':
                result += "신한카드";
                break;
            case '57973':
                result += "국민은행";
                break;
        }
    } else if (number.at(0) === '5') {
        result += "마스타카드, Maestro, ";
        switch (num) {
            case '15594':
                result += "신한카드";
                break;
            case '24353':
                result += "외한카드";
                break;
            case '40926':
                result += "국민은행";
                break;
        }
    } else if (number.slice(0,2) === '35') {
        result += "JCB카드, ";
        num = number.slice(2);
        switch (num) {
            case '6317':
                result += "NH농협카드";
                break;
            case '6901':
                result += "신한카드";
                break;
            case '6912':
                result += "KB국민카드";
                break;
        }
    }
    return result;
}
// 거리를 km단위로 입력받아 배송료를 계산하는 프로그램
// 개선점.
let CalcurateFee = () => {
    let distance = Number(prompt("거리를 km단위로 입력하세요."));
    if (distance < 50) {
        return "10000원";
    } else if (distance < 100) {
        return "18000원";
    } else if (distance < 300) {
        return "55000원";
    } else {
        return "75000원";
    }
}
// 시간때를 의미하는 영어단어를 입력받아 의미를 출력하는 프로그램.
let CheckDayTime = () => {
    let daytime = prompt("시간때를 의미하는 영어단어를 입력하세요.");
    switch(daytime) {
        case "morning hours":
            return "아침시간 (7-12)";
        case "midday":
        case "noon":
            return "점심시간 (12-1)";
        case "afternoon hours":
            return "오후 (1-6)";
        case "evening hours":
            return "저녁시간 (6-9)";
        case "night hours":
            return "밤시간 (9-12)";
        case "midnight":
            return "자정시간 (12)";
        case "early morning hours":
            return "새벽시간 (12-5)";
        case "small hours":
            return "새벽 (1-3)";
        case "dawn":
        case "daybreak":
            return "해뜰력 (5-7)";
    }
}
// 잔고와 퍼센트 단위의 이자율을 입력하면 언제 2배의 수익을 넘는지 알려주는 프로그램.
let ComputeInvestment = (balance, rate) => {
    let tot = 0;
    let i = 0;
    while (tot < balance*2) {
        tot = balance * (1+ rate/100) ** i;
        i++;
    }
    console.log(`${rate}% 이자율로 ${i-1}년 후에 ${balance}원은 두배가 됩니다.(${tot}원)`);
}
