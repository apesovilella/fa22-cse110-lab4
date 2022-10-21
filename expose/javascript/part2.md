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

    - 