[Roman to Integer - LeetCode](https://leetcode.com/problems/roman-to-integer/)

### 문제 설명

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

**Example 1:**

```
Input: s = "III"
Output: 3

```

**Example 2:**

```
Input: s = "IV"
Output: 4

```

**Example 3:**

```
Input: s = "IX"
Output: 9

```

**Example 4:**

```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

```

**Example 5:**

```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

```

**Constraints:**

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.

## 풀이

- `('I', 'V', 'X', 'L', 'C', 'D', 'M')`라는 로마 문자가 주어졌다.
- 각각의 로마 문자에는 숫자가 존재한다.
- 우선 먼저 로마 문자들이 합쳐진 로마 문자열을 .split() 함수로 문자로 나눈다.
- 나중에 알고 봤더니 그냥 문자열로도 반복문을 돌릴 수 있었다..
- 이제 for문으로 배열의 처음부터 끝까지 loop을 도는데, 신기한건 `('IV', 'IX', 'CM', 'XC')` 와 같은 문자의 경우 `"III"` = 3 과 같이 우리가 예상하는 수가 반환되는 것이 아니라 `뒤의 문자의 수 - 앞의 문자의 수가 된 값`이 반환된다.
- 즉 이말은 로마 문자들은 각각의 해당하는 숫자들을 가지고 있는데, 그 문자들이 합쳐졌을 때 앞의 문자 < 뒤의 문자일 경우 `뒤의 문자의 해당하는 수 - 앞의 문자의 해당하는 수를 빼야하는 규칙`이 생긴다.
- 그래서 조건문을 통해 앞에 있는 문자의 수와 뒤에 있는 문자의 수를 서로 비교해서 뒤에 문자가 크면 뒤에 문자의 수 - 앞의 문자를 해준다.
- 대신 주의할 점은 두 문자를 비교 했기 때문에 두 문자의 다음 순서로 가도록 설정해야 한다.
- 즉 i++를 하면 된다.
- 그럼 바로 다음 순서로 가서
