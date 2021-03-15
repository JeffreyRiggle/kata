package practice

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNotPalindrome(t *testing.T) {
	assert := assert.New(t)
	assert.False(IsPalindrome("test"), "It should fail for non palindromes")
}

func TestSimplePalindrome(t *testing.T) {
	assert := assert.New(t)
	assert.True(IsPalindrome("level"), "It should not fail for valid palindromes")
}

func TestPalindromeWithSpace(t *testing.T) {
	assert := assert.New(t)
	assert.True(IsPalindrome("madam im adam"), "It should not fail for valid palindromes")
}

func TestPalindromeWithCase(t *testing.T) {
	assert := assert.New(t)
	assert.True(IsPalindrome("Madam"), "It should not fail for valid palindromes")
}

func TestPalindromeWithApostrope(t *testing.T) {
	assert := assert.New(t)
	assert.True(IsPalindrome("Madam I'm Adam"), "It should not fail for valid palindromes")
}

func TestPalindromeWithComma(t *testing.T) {
	assert := assert.New(t)
	assert.True(IsPalindrome("Madam, I'm Adam"), "It should not fail for valid palindromes")
}

func TestPalindromeWithPeriod(t *testing.T) {
	assert := assert.New(t)
	assert.True(IsPalindrome("Madam, I'm Adam."), "It should not fail for valid palindromes")
}

func TestPalindromeWithExclaimation(t *testing.T) {
	assert := assert.New(t)
	assert.True(IsPalindrome("Madam, I'm Adam!"), "It should not fail for valid palindromes")
}

func TestPalindromeWithQuestion(t *testing.T) {
	assert := assert.New(t)
	assert.True(IsPalindrome("Madam, I'm Adam?"), "It should not fail for valid palindromes")
}