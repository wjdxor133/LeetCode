### 문제 설명

<img width="424" alt="Single Number" src="https://user-images.githubusercontent.com/47416686/114299760-03211a00-9af8-11eb-8de4-d8c775dffab6.png">

- 배열 안에 중복된 요소를 제외한 요소를 반환하면 된다.

## 코드

```jsx
* @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let newArr = [...nums];
    let count = 0;

   for(let i = 0; i < nums.length; i++){
       for(let j = 0; j < nums.length; j++){
           if(nums[i] === nums[j]){
               count += 1;
           }
       }
       if(count !== 1){
           newArr.splice(newArr.indexOf(nums[i]), 1);
           count = 0;
       }
   }
    return newArr[0];
};
```

## 문제 풀이

- 배열에서 하나씩 원소를 꺼내서 모든 배열을 비교하는 이중 for문 방법으로 접근했다.
- 단, 여기서 중복되는 원소를 찾아 어떠한 조건을 줘야한다.
- 나는 여기서 count라는 값을 선언해서 같은 원소일 때, 1씩 증가하는 조건을 주었다.
- count가 1이 아닐 때, 즉 이말은 중복된 요소일때를 뜻한다.
- 중복되면 count의 값은 2이상 일 것이기 때문이다.
- 만약 중복된 요소일 경우, 배열에서 indexOf()로 해당 원소를 찾아 splice()로 지워준다.
- 최종적으로 남은 원소 하나를 반환한다.

## 📎 문제 링크

[Single Number - LeetCode](https://leetcode.com/problems/single-number/)
