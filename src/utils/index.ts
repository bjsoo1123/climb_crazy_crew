/**
 * 특정 날짜의 요일을 반환하는 함수
 * @param {Date} date - 요일을 알고 싶은 날짜 객체
 * @returns {string} 요일 이름 (예: '일요일')
 */

export function getDayName(date: Date): string {
  const days = ["sun", "mon", "thus", "wed", "thur", "fri", "sat"];
  return days[date.getDay()];
}
