### 문제 설명

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

- 두 개의 이진 트리가 주어지면 이들이 같은지 확인하는 함수를 작성하십시오.
- 두 이진 트리가 구조적으로 동일하고 노드의 값이 동일한 경우 동일한 것으로 간주됩니다.
- 동일한 속도로 두 트리에 대해 사전 주문 순회를 수행하고, 불일치를 발견 할 때마다 false를 반환하고, 그렇지 않으면 왼쪽 및 오른쪽 하위 트리 모두에서 순회를 계속합니다.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg](https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg)

```
Input: p = [1,2,3], q = [1,2,3]
Output: true

```

**Example 2:**

![https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg](https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg)

```
Input: p = [1,2], q = [1,null,2]
Output: false

```

**Example 3:**

![https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg](https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg)

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

### 문제 풀이

- 두 트리가 동일한 트리인지 비교해서 true 또는 false를 리턴하는 문제이다
- 문제가 이해가 잘 되지 않아서 다른 사람의 풀이를 참고해서 풀었다.. 😂
- `p` 트리 혹은 `q` 트리 둘다  `null` 일 경우, 두 트리가 동일하기 때문에 `true`를 반환
- `p` 트리 혹은 `q` 트리 둘 중 하나라도 `null` 일 경우, `false` 를 반환
