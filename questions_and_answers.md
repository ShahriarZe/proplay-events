<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>In the given code `greetign` is declared, but `greeting` is used later in the code. JavaScript is case-sensitive, so `greetign` and `greeting` are considered two different variables. For this reason ReferenceError occured</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In the given code, variable `a` holds the numerical value 1, and variable `b` holds the string "2". In JavaScript, when we use the `+` operator with a number and a string, the number is automatically converted to a string, and then the two strings are concatenated together.So, in the expression 1 + "2", JavaScript converts the number 1 to the string "1" and then concatenates it with the string "2", for this reason we got output `"12"` </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>When we change the value of `info.favoriteFood`, we are only changing the value of a property on the info object. The `food` array is still pointing to the same array object, which contains the values "🍕", "🍫", "🥑", and "🍔".Modifying the `info` object does not alter the contents of the `food` array, so when we log `food`, it remains unchanged.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i> In the given code the function `sayHi`  is called without any arguments. This means that the `name` parameter will be set to the default value, which is undefined.Fo this reason we got output as `Hi there, undefined`.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In the code,the `forEach()` method iterates through the `nums` array, incrementing the `count` variable for each non-zero element. For each element in the array, the callback function checks if the element is not equal to zero. If it is not equal to zero, the counter variable `count` is incremented.After the `forEach()` method has finished iterating over the array, the `count` variable will contain the number of non-zero elements in the array. Since the `nums` array contains three non-zero elements, the output of the code snippet will be `3`.</i>

</p>
</details>
