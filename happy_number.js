// slow and fast pointers

function sumDigits(number) {
    let totalSum = 0;
    while (number > 0) {
        let temp = Math.floor(number / 10),
            digit = number % 10;
        number = temp;
        totalSum += digit ** 2;
    }
    return totalSum;
}

function isHappyNumber(n){
    // your code will replace this placeholder return statement
    let fast = sumDigits(n);
    let slow = n;
    if(fast == 1 || slow == 1) return true

    while(fast != slow){
        fast = sumDigits(sumDigits(fast));
        slow = sumDigits(slow);
        if(fast == 1 || slow == 1) return true

    }
    return false;
}