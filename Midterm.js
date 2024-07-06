

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

//Time complexity O(n*2)
function findMissingNumber2(arr,n){

    for(let i = n; i > 0; i--){
        let foundNumInArr = false;
        for(let j = 0; j < arr.length; j++){
            if(i === arr[j]){
                foundNumInArr = true;
            }
        }

        if(!foundNumInArr){
            return i;
        }

    }
    console.log("Can't find the number");
}

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
    console.log("No indices Sum match");
}


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


