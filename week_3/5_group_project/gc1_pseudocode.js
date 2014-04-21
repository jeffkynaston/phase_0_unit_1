// Challenge 5 - Group Project - Person 2 Pseudocode

1) Assign a new variable 'sum' to a function that takes one argument, an array
2) Inside the sum() function, assign a new variable called 'total' a value of 0
3) Inside the sum() function, use a for loop to traverse across the array and add each element to total
		-set counter i to 0
		-set the condition for i to be less than the length of the array
		-set i to increment 1 at the end of each iteration
		-each iteration, add the value of the element at array position i to total
4) Return the value of total at the end of the sum() function


5) Assign the variable 'mean' to a new function that takes one argument, an array
6) Inside the mean() function, assign a new variable 'arraySum' to the result of the sum() function
7) Inside the mean() function, divide arraySum by the length of the array and return this quotient


8) Assign the variable 'median' to a new function that takes one argument, an array
9) Inside the median() function, assign a new variable 'sortedArray' to the result of calling
	 the sort() function on the array
10) Inside the median function, use an if statement with a modulus operator to check if 
    sortedArray is divisible by 2
11) If yes, add the array element at position [array length/2] and the array element at position
		[(array length+2)/2]. Divide this sum by 2 and return the quotient
12) If no, return the array element at position [(array length + 1) / 2]


Reflections: 

- What was this experience like?
This was a very interesting experience. Initially, I thought the pseudocode would be one of
the easier parts of the challenge. Once I started on it, however, I realized that it is
pretty difficult to write clear, concise pseudocode that can be fully understood by another
person and direclty translated into code. My pseudocode statements got pretty long at times,
but I felt that was necessary in order to make sure that the next person had a comprehensive
idea of what they were supposed to code. 

Was your group successful in passing the tests?

- My group passed all but the last two tests, checking for median values. I played around with
the code using node.js and identified the errors by throwing console.logs everywhere to see what
my values were at each step. The .js file i used for this can be located here: 
https://github.com/jeffkynaston/phase_0_unit_1/blob/master/week_3/5_group_project/median.js

What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?

- The biggest thing I learned was that it is hard to separate all these parts of web development.
Thinking through all of the logic during the pseudocoding stage proved difficult - there was 
an error in my logic that I did not catch, and the error ended up in our final solution because
the instructions from persons 3 and 4 were(Correctly) followed  literally (in case you are
wondering, I did not take into account the fact that array indexes start at 0, not 1). When
you work on all parts of development (user stories, pseudocoding, writing and refactoring) 
you get a more wholistic approach and you are able to catch your own errors at previous stages.