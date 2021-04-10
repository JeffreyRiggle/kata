package practice

class Palindrome {
    def isPalindrome(value: String) : Boolean = {
        val revsersedValue = value.reverse
        return value == revsersedValue
    }
}