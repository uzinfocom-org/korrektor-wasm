use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Serialize, Deserialize)]
pub struct Parameter {
    content: String,
}

impl Parameter {
    pub fn from(content: String) -> Parameter {
        Parameter { content }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Misspell {
    pub misspelled: String,
    pub position: u32,
    pub suggestions: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CorrectResponse {
    content: Vec<Misspell>,
    message: String,
    query: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FrequencyResponse {
    content: HashMap<String, u32>,
    message: String,
    query: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TypicalResponse {
    content: String,
    message: String,
    query: String,
}
