use super::*;

#[test]
fn test_not_palindrome() {
    assert_eq!(is_palindrome("test".to_string()), false);
}

#[test]
fn test_simple_palindrome() {
    assert_eq!(is_palindrome("level".to_string()), true);
}

#[test]
fn test_palindrome_with_space() {
    assert_eq!(is_palindrome("madam im adam".to_string()), true);
}

#[test]
fn test_palindrome_with_case() {
    assert_eq!(is_palindrome("Madam".to_string()), true);
}

#[test]
fn test_palindrome_with_apostrope() {
    assert_eq!(is_palindrome("Madam I'm Adam".to_string()), true);
}

#[test]
fn test_palindrome_with_comma() {
    assert_eq!(is_palindrome("Madam, I'm Adam".to_string()), true);
}

#[test]
fn test_palindrome_with_period() {
    assert_eq!(is_palindrome("Madam, I'm Adam.".to_string()), true);
}

#[test]
fn test_palindrome_with_exclaimation() {
    assert_eq!(is_palindrome("Madam, I'm Adam!".to_string()), true);
}

#[test]
fn test_palindrome_with_question() {
    assert_eq!(is_palindrome("Madam, I'm Adam?".to_string()), true);
}