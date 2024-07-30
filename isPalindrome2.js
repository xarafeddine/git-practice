function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    let removed = false;
    while (i < j) {
        if (s[i] != s[j]) {
            if (removed) return false;
            removed = true;
            if (s[i] == s[j - 1]) {
                j--;
                
            }
            else if (s[i + 1] == s[j]) {
                i++;
                
            }

            continue;
        }
        i++;
        j--;



    }
    return true;
    // Your code will replace this placeholder return statement

    // Tip: You may use the code template provided
    // in the two_pointers.js file
}
