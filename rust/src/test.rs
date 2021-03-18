use super::*;

#[test]
fn test_not_palindrome() {
    assert_eq!(is_palindrome("test".to_string()), false);
}