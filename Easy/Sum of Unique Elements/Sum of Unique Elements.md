## 문제 설명

You are given an integer array `nums`. The unique elements of an array are the elements that appear **exactly once** in the array.

Return *the **sum** of all the unique elements of* `nums`.

**Example 1:**

```
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

```

**Example 2:**

```
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

```

**Example 3:**

```
Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
```

## 문제 풀이

- 배열 안에서 중복되는 원소를 찾아서 그 원소를 제외한 나머지 원소들의 합을 구하는 문제이다.
- 접근 방법은 원소를 순서대로 하나씩 꺼내서 배열 전체의 원소들을 하나씩 비교하는 식으로 접근을 했다.
- 더 좋은 방법이 있지 않을까.. 생각은 했지만 떠오르지 않았다.
- 결국 이중 for문을 통해서 문제를 해결했다.
- count라는 변수를 통해서 중복되지 않는 원소를 추출하고 sum이라는 변수에 계속 더하는 방식으로 풀었다.

