class SungJuk2 {  // 값만 다루는 클래스 : VO, DTO
    #name = '';
    #kor = '';
    #eng = '';
    #mat = '';

    #tot = 0;
    #avg = 0.0;
    #grd = '';

    constructor(name, kor, eng, mat) {
        this.#name = name;
        this.#kor = kor;
        this.#eng = eng;
        this.#mat = mat;
    }

    set name(name) { this.#name = name; }
    get name() { return this.#name; }
    set kor(kor) { this.#kor = kor; }
    get kor() { return this.#kor; }
    set eng(eng) { this.#eng = eng; }
    get eng() { return this.#eng; }
    set mat(mat) { this.#mat = mat; }
    get mat() { return this.#mat; }

    set tot(tot) { this.#tot = tot; }
    get tot() { return this.#tot; }
    set avg(avg) { this.#avg = avg; }
    get avg() { return this.#avg; }
    set grd(grd) { this.#grd = grd; }
    get grd() { return this.#grd; }

    toString() {
        return `${this.#name} ${this.#kor} ${this.#eng} ${this.#mat} <br>
                        ${this.#tot} ${this.#avg} ${this.#grd} <br>`;
    }
} // 값만 저장하는 클래스

class SungJukService2 { // 기능만 다루는 클래스 : Service, DAO, Util
    static computeSungJuk (sj) {  // 객체생성 없이 바로 메서드 호출 가능
        sj.tot = sj.kor + sj.eng + sj.mat;
        sj.avg = sj.tot / 3;
        switch (parseInt(sj.avg / 10)) {
            case 10: case 9: sj.grd = '수'; break;
            case 8:          sj.grd = '우'; break;
            case 7:          sj.grd = '미'; break;
            case 6:          sj.grd = '양'; break;
            default:         sj.grd = '가'; break;
        } // switch
    };
}
