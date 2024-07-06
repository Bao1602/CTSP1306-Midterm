

//Question 1
//Time complexity O(n)
function findMissingNumber(arr,n){
    const sumOfN = (n * (n+1)) / 2;

    let sumOfArray = 0;

    for (let i = 0; i < arr.length; i++) {
        sumOfArray = sumOfArray + arr[i];
    }

    let missNum = sumOfN - sumOfArray;

    return missNum;
}

/*
TEST CASES
array = [5, 4, 1, 2]
n = 5
# Expected output: 3
array = [9, 5, 3, 2, 6, 1, 7, 8, 10]
n = 10
# Expected output: 4
array = [2, 3, 1, 5]
n = 5
# Expected output: 4
array = [1, 2, 3, 4, 5]
n = 6
# Expected output: 6
*/

//Question 2
//Time complexity : O(n*2)

function findindicesSum(arr,t){

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == t){
                return [i ,j];
            }
        }
    }
    console.log("No such number");
}


/*
TEST CASES

array = [1, 5, 2, 7]
target = 8
# Expected output: [1, 3]

array = [20, 1, 5, 2, 11]
target = 3
# Expected output: [1, 3]

array = [3, 2, 4]
target = 6
# Expected output: [1, 2]
*/


//Question 3

function generatePermutation(str) {

    }


/*
TEST CASES:
let input = "AB";
// Expected Output: ["AB", "BA"]

let input = "A";
// Expected Output: ["A"]

Let input = “ABC”;
// Expected Output: ["ABC", "ACB", "BAC", "BCA","CAB", "CBA"]

*/



//Question 4
//Time complexity: O(n)
function checkIfCycleExists(headNode) {
    let slowPointer = headNode;
    let fastPointer = headNode;

    while(slowPointer !== null && fastPointer !== null){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if(slowPointer === fastPointer){
            return true;
        }
    }
    return false;
};


/*
TEST CASES:

headNode = "A";
Linked List = “A” -> “B” -> “C” -> “A”
// Expected Output: true

headNode = "1";
Linked List = “1” -> “2” -> “3” -> null
// Expected Output: false

headNode = "1";
Linked List = “1” -> “2” -> “3” -> 1
// Expected Output: true

*/



//Question 5
//Time Complexity : O(n)
function checkIfValidParenthesis(str)
{
    const stack = [];

    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for(const char of str){
        if (char === '(' || char === '[' || char === '{'){
            stack.push(char);
        }else {
            const popvalue = stack.pop();
            if(char !== map[popvalue]){
                return false;
            }
        }
    }

    return stack.length === 0;
}

/*
TEST CASES:

str = "()";
// Expected Output: true

str = "(){}[]";
// Expected Output: true

str = “([})”
// Expected Output: false

str = “[({})]”
// Expected Output: true

*/


