package practice

import (
	"strings"
	"regexp"
)

func reverse(value string) string {
    runes := []rune(value)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func clean(value string) string {
	exp := regexp.MustCompile(`[\s',\.!\?]`)
	return exp.ReplaceAllString(strings.ToLower(value), "")
}

func IsPalindrome(value string) bool {
	cleanStr := clean(value)
	return cleanStr == reverse(cleanStr)
}