package practice

class Palindrome {
    val cleanPattern = "[\\s',\\.!\\?]".r

    def isPalindrome(value: String) : Boolean = {
        val cleanValue = cleanPattern.replaceAllIn(value.toLowerCase, "")
        val revsersedValue = cleanValue.reverse
        return cleanValue == revsersedValue
    }
}