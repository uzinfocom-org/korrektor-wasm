use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Serialize, Deserialize)]
pub struct Parameter {
    pub content: String,
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
    pub content: Vec<Misspell>,
    pub message: String,
    pub query: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct FrequencyResponse {
    pub content: HashMap<String, u32>,
    pub message: String,
    pub query: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TypicalResponse {
    pub content: String,
    pub message: String,
    pub query: String,
}
