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
}