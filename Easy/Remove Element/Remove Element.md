[Remove Element - LeetCode](https://leetcode.com/problems/remove-element/)

### 문제 설명

Given an array *nums* and a value `val`, remove all instances of that value **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** with `O(1)` extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by **reference**, which means a modification to the input array will be known to the caller as well.

- 배열이 주어지면 val에 해당하는 요소를 삭제하고 해당 배열 길이를 반환
- 단, 새로운 배열에 할당하면 안된다.
- 배열 요소를 정렬하는건 가능하다. 새로운 배열 할당만 안하면 되며 길이를 반환한다.

Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

**Example 1:**

```
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.

```

**Example 2:**

```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
```

### 문제 풀이

- 입력으로 받는 값으로 nums와 val이 존재한다.
- nums는 배열로 입력을 받고 val은 숫자로 입력을 받는다.
- 예시로 nums = [0,1,`2`,`2`,3,0,4,`2`] , `val = 2` → nums = [0,1,4,0,3]
- 즉, 결과를 보면 nums 배열 안에서 val 값을 없애주면 된다.
- 단, 새 배열을 반환하면 안되기 때문에 filter()나 다른 배열을 반환하는 메소드를 사용하면 안된다.
