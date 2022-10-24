# CSE110 - Lab4

## Questions for Part 2

1. **What will happen at line 12 and why? If the code causes an error, explain why.**

    - The value of `i` will be printed in the console. In this case the value will be `3` because the `for` will iterate through the length of `prices`, which is 3.

</br>

2. **What will happen at line 13 and why? If the code causes an error, explain why.**

    - The value of `discountedPrice` will be printed in the console. In this case the value will be `150` because the `for` will iterate through the values of `prices` and change them to half of their original value. The printed result will be half of the last price (300 * 0.5 = 150).

</br>

3. **What will happen at line 14 and why? If the code causes an error, explain why.**

    - Same as in question 2. The difference is that `discountedPrice` is not rounded and `finalPrice` is.

</br>

4. **What will this function return? Give a brief explanation why. If the code causes an error, explain why.**

    - This function will return an array of the original `prices` after being multiplied by the amount `discount` and rounded to the nearest integer.

</br>

5. **What will happen at line 12 and why?  If the code causes an error, explain why. (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).**

    - `ReferenceError: i is not defined`. It returns an error because the variable `i` is declared using `let`, so it is only accessible in the `for` block.

</br>

6. **What will happen at line 13 and why? If the code causes an error, explain why.**

    -  `ReferenceError: discountedPrice is not defined`. It returns an error because the variable `discountedPrice` is declared using `let`, so it is only accessible in the `for` block.

</br>

7. **What will happen at line 14 and why? If the code causes an error, explain why.**

    - The value of `finalPrice` will be printed in the console. In this case the value will be `150` because the `for` will iterate through the values of `prices` and change them to half of their original value. The printed result will be half of the last price rounded (300 * 0.5 = 150).

</br>

8. **What will this function return? Give a brief explanation. If the code causes an error, explain why.**

    - The function will return the array `discounted` with all the discounted prices ([ 50, 100, 150]), but they will not be printed. No errors will appear.

</br>

9. **What will happen at line 11 and why? If the code causes an error, explain why.**

    - The program will try to get the value of `i` but it is only visible to the `for` block. `ReferenceError: i is not defined`.

</br>

10. **What will happen at line 12 and why? If the code causes an error, explain why.**

    - The program fetches the value of `length`, which is the length of the array `prices`, and at line 12 it is printed (`3`). No errors. 

</br>

11. **What will this function return? Give a brief explanation. If the code causes an error, explain why.**

    - The function will return the array `discounted` with all the discounted prices ([ 50, 100, 150]), but they will not be printed. No errors will appear.

12. **Given the above Object, write the notation for:**

    * **Accessing the value of the name property in the student object**
        - `student.name`
    * **Accessing the value of the Grad Year property in the student object**
        - `student['Grad Year']`
    * **Calling the function for the greeting property in the student object**
        - `student.greeting()`
    * **Accessing the name property of the object in the Favorite Teacher property in student**
        - `student['Favorite Teacher'].name`
    * **Access index zero in the array of the courseLoad property of the student object**
        - `student.courseLoad[0]`

</br>

13. **Arithmetic**

    * **'3' + 2 = '32'**.
        - Because the first object is a string, the `+` is the same as `concat('3', '2')`.
    * **'3' - 2 = 1**.
        - The objects are generally converted to numbers and then operated (so `3 - 2 = 1`).
    * **3 + null = 3**.
        - `null` gets converted to 0 and added to 3.
    * **'3' + null = 3null**.
        - Same as operation *A*, the second object gets converted to a string and concatenated.
    * **true + 3 = 4**.
        - `true` is converted to the value 1 and added to 3.
    * **false + null = 0**.
        - `false` and `null` get converted to 0 and added.
    * **'3' + undefined = '3undefined'**.
        - Same as operation *A* and *B*. `undefined` is converted to a string and concatenated.
    * **'3' - undefined = NaN**.
        - `undefined` is converted to `NaN`, which can't be operated with any number.

</br>

1.  **Comparison**

    * **'2' > 1 = true**.
        - `'2'` is converted to the number 2 and compared to 1.
    * **'2' < '12' = false**.
        - The strings are compared one character at a time. So `'2'` is compared to `'1'`, which is false (`2 < 1 = false`).
    * **2 == '2' = true**.
        - The string `'2'` is converted to the number 2 and compared.
    * **2 === '2' = false**.
        - The strict equality `===` doesn't allow conversion of types, so the number is not equal to the string.
    * **true == 2 = false**.
        - true is converted to 1 and compared to 2.
    * **true === Boolean(2) = true**.
        - The object `2` is converted to `Boolean` (`0`, `-0` and `NaN` turn into `false`, any other number turns into `true`) and compared to `true`.

</br>

15. **Explain the difference between the == and === operators**.

    - The `==` is a strict equality of two objects converted to numbers (first conversion and the comparison). The `===` is a strict equality of two objects without the conversion (only comparison).

</br>
