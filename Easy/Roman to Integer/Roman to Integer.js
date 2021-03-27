// code
var romanToInt = function (s) {
  const romanArr = s.split(""); // 로마 문자열 -> 문자로 반환
  let total = 0; // 반환값
  const romanData = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < romanArr.length; i++) {
    const cur = romanData[romanArr[i]]; // 앞 문자
    const next = romanData[romanArr[i + 1]]; // 뒤 문자
    if (cur < next) {
      total += next - cur;
      i++;
    } else {
      total += cur;
    }
  }

  return total;
};
