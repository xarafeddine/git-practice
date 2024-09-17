var isPalindrome = function(s) {
    const arr = [];
    for(let char of s){
        if(/[0-9]/.test(char)){
            arr.push(char);
        }else if(/[a-zA-Z]/.test(char)){
            arr.push(char.toLowerCase());
        }
    }
    
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i]!==arr[j]) return false;
        i++;
        j--;
    }
    
    return true;
};

console.log(isPalindrome("0P"));
