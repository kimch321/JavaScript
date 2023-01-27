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