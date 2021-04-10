package practice

import org.scalatest.flatspec.AnyFlatSpec

class PalindromeSpec extends AnyFlatSpec {
    val palindrome = new Palindrome

    it should "handle non palindromes" in {
        val result = palindrome.isPalindrome("Test")
        assert(result === false)
    }

    it should "handle simple palindromes" in {
        val result = palindrome.isPalindrome("level")
        assert(result)
    }

    it should "handle palindromes with spaces" in {
        val result = palindrome.isPalindrome("madam im adam")
        assert(result)
    }

    it should "handle palindromes with casing" in {
        val result = palindrome.isPalindrome("Madam")
        assert(result)
    }

    it should "handle palindromes with apostrope" in {
        val result = palindrome.isPalindrome("Madam I'm Adam")
        assert(result)
    }

    it should "handle palindromes with comma" in {
        val result = palindrome.isPalindrome("Madam, I'm Adam")
        assert(result)
    }

    it should "handle palindromes with period" in {
        val result = palindrome.isPalindrome("Madam, I'm Adam.")
        assert(result)
    }

    it should "handle palindromes with exclamation" in {
        val result = palindrome.isPalindrome("Madam, I'm Adam!")
        assert(result)
    }

    it should "handle palindromes with question" in {
        val result = palindrome.isPalindrome("Madam, I'm Adam?")
        assert(result)
    }
}