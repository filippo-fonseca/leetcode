// https://leetcode.com/problems/palindrome-number/

const isPalindrome = (x: number): boolean => {
    if (x < 0) return false

    let reversed = 0, y = x

    while (y > 0) {
        const lastDigit = y % 10
        reversed = (reversed * 10) + lastDigit
        y = (y / 10) | 0
    }
    return x === reversed
}
