// 100명 학생 자동 생성 알고리즘
const names = ["김하늘", "박준서", "이서아", "최도윤", "정예준", "강지우", "조민준", "윤서현", "장하은", "임주원"];

function generate100Students() {
  const students = [];
  const grades = [];
  const mocks = [];
  const atts = [];
  const acts = [];
  const awards = [];
  const careers = [];

  for (let i = 1; i <= 100; i++) {
    const ban = Math.ceil(i / 25);
    const num = ((i - 1) % 25) + 1;
    const stId = `10${ban.toString().padStart(2, '0')}${num.toString().padStart(2, '0')}`;
    const name = names[i % names.length] + i;
    const stPhone = `010-10${i.toString().padStart(2, '0')}-1111`;
    const pPhone = `010-20${i.toString().padStart(2, '0')}-2222`;

    // 학생
    students.push({
      학번: stId, 학년: "1", 반: ban.toString(), 번호: num.toString(),
      성명: name, 성별: i % 2 === 0 ? "여" : "남", 학생휴대폰: stPhone,
      보호자1_성명: "보호자" + i, 보호자1_관계: "모", 보호자1_휴대폰: pPhone
    });

    // 내신
    grades.push(
      { 학번: stId, 과목명: "공통국어", 원점수: (70 + (i % 30)).toString(), 석차등급: ((i % 5) + 1).toString() },
      { 학번: stId, 과목명: "공통수학", 원점수: (65 + (i % 35)).toString(), 석차등급: ((i % 4) + 1).toString() }
    );

    // 모의고사
    mocks.push({ 시행년월: "2026-06", 학번: stId, 영역: "국어", 표준점수: (110 + (i % 25)).toString(), 등급: ((i % 3) + 1).toString() });

    // 출결
    atts.push({ 학번: stId, 수업일수: "190", 결석_질병: (i % 3).toString(), 결석_미인정: "0" });

    // 창체
    acts.push({ 학번: stId, 영역: "동아리", 활동명: "수리탐구반", 주요내용: "통계 프로젝트 탐구활동" });

    // 수상
    awards.push({ 학번: stId, 명칭: "교내 수학경시대회", 등급_급수: "우수상" });

    // 진로
    careers.push({ 학번: stId, 희망학과1: "컴퓨터공학과", 희망대학1: "포항공과대학교" });
  }

  return {
    "01_학생명렬표": { rows: students },
    "03_내신성적": { rows: grades },
    "04_모의고사성적": { rows: mocks },
    "05_출결": { rows: atts },
    "06_창의적체험활동": { rows: acts },
    "07_수상·자격": { rows: awards },
    "08_진로희망": { rows: careers }
  };
}

const excelData = generate100Students();