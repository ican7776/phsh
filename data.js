function generateData() {
  const names = ["김하늘", "박준서", "이서아", "최도윤", "정예준", "강지우", "조민준", "윤서현", "장하은", "임주원"];
  const subjects = ["공통국어", "공통수학", "공통영어", "한국사", "통합사회", "통합과학"];

  const students = [];
  const grades = [];
  const mocks = [];
  const atts = [];
  const acts = [];
  const careers = [];

  for (let i = 1; i <= 100; i++) {
    const ban = Math.ceil(i / 25);
    const num = ((i - 1) % 25) + 1;
    const stId = `10${ban.toString().padStart(2, '0')}${num.toString().padStart(2, '0')}`;
    const name = names[i % names.length] + i;

    // 학생 명렬
    students.push({
      학번: stId, 학년: "1", 반: ban.toString(), 번호: num.toString(),
      성명: name, 성별: i % 2 === 0 ? "여" : "남", 생년월일: `2010-0${(i%9)+1}-15`,
      학생휴대폰: `010-10${i.toString().padStart(2, '0')}-1111`,
      보호자1_성명: "보호자" + i, 보호자1_관계: "모", 보호자1_휴대폰: `010-20${i.toString().padStart(2, '0')}-2222`
    });

    // 6개 과목 임의 내신 성적 생성
    subjects.forEach((sub, idx) => {
      const score = 65 + ((i * 7 + idx * 13) % 35);
      const rank = Math.floor((100 - score) / 10) + 1;
      grades.push({
        학번: stId, 교과: sub.replace("공통", ""), 과목명: sub,
        원점수: score.toString(), 과목평균: "71.2", 성취도: score >= 90 ? 'A' : (score >= 80 ? 'B' : 'C'),
        석차등급: Math.min(Math.max(rank, 1), 9).toString()
      });
    });

    // 모의고사 임의 성적 생성
    mocks.push(
      { 시행년월: "2026-03", 학번: stId, 영역: "국어", 표준점수: (115 + (i % 20)).toString(), 백분위: (80 + (i % 18)).toString(), 등급: ((i % 3) + 1).toString(), 학교내석차: ((i % 20) + 1).toString() },
      { 시행년월: "2026-06", 학번: stId, 영역: "수학", 표준점수: (120 + (i % 22)).toString(), 백분위: (85 + (i % 14)).toString(), 등급: ((i % 3) + 1).toString(), 학교내석차: ((i % 15) + 1).toString() }
    );

    // 기타
    atts.push({ 학번: stId, 수업일수: "190", 결석_질병: (i % 3).toString() });
    acts.push({ 학번: stId, 활동명: "수리과학 탐구반", 주요내용: "빅데이터 및 성적 분석 프로젝트 참가" });
    careers.push({ 학번: stId, 희망학과1: "인공지능학과", 희망대학1: "포항공과대학교" });
  }

  return {
    "01_학생명렬표": { rows: students },
    "03_내신성적": { rows: grades },
    "04_모의고사성적": { rows: mocks },
    "05_출결": { rows: atts },
    "06_창의적체험활동": { rows: acts },
    "08_진로희망": { rows: careers }
  };
}

const excelData = generateData();