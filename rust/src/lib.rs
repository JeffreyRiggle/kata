fn clean_string(value: String) -> String {
    value.to_lowercase()
         .replace(" ", "")
         .replace("'", "")
         .replace(",", "")
         .replace(".", "")
         .replace("!", "")
         .replace("?", "")
}

pub fn is_palindrome(value: String) -> bool {
    let c_value: String = clean_string(value);
    let r_value: String = c_value.chars().rev().collect::<String>();
    r_value == c_value
}

#[cfg(test)]
mod test;