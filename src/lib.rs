#![allow(dead_code)]

mod client;
mod types;

use client::Client;
use types::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Korrektor {
    client: Client,
}

#[wasm_bindgen]
impl Korrektor {
    #[wasm_bindgen(constructor)]
    pub fn new(token: String) -> Korrektor {
        Korrektor {
            client: Client::new(token),
        }
    }

    pub async fn correct(&self, content: String, language: String) -> Result<JsValue, JsValue> {
        let data = self
            .client
            .method::<CorrectResponse>(
                "/private/correct/content",
                Some(Parameter::from(content)),
                Some(language),
            )
            .await;

        Ok(serde_wasm_bindgen::to_value(&data).unwrap())
    }
}
