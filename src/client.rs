use reqwest::header::HeaderMap;
use reqwest::Client as Reqwest;
use std::collections::HashMap;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
struct Client {
    client: Reqwest,
    token: String,
}

impl Client {
    fn new(token: String) -> Client {
        Client {
            token,
            client: reqwest::Client::builder().build().unwrap(),
        }
    }

    async fn method<T: serde::Serialize + serde::de::DeserializeOwned>(
        &self,
        name: &str,
        body: Option<HashMap<&str, &str>>,
        extra: Option<&str>,
    ) -> T {
        let headers = HeaderMap::new();
        let mut url: String = format!("https://api.korrektor.uz/{name}");

        if !headers.is_empty() {
            for head in headers.iter() {
            
            }
        }

        if extra.is_some() {
            url.push_str(format!("/{}", extra.unwrap()).as_str())
        }

        let text = reqwest::Client::new()
            .get("https://api.github.com/repos/rustwasm/wasm-bindgen/branches/master")
            .headers(headers)
            .send()
            .await
            .expect("Failed at sending request")
            .text()
            .await
            .unwrap();

        let data: T = serde_json::from_str(&text).unwrap();

        data
    }
}
