use crate::types::Parameter;
use reqwest::header::HeaderMap;
use reqwest::Client as Reqwest;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Client {
    client: Reqwest,
    token: String,
}

#[wasm_bindgen]
impl Client {
    #[wasm_bindgen(constructor)]
    pub fn new(token: String) -> Client {
        Client {
            token,
            client: reqwest::Client::builder().build().unwrap(),
        }
    }

    pub(crate) async fn method<T: serde::Serialize + serde::de::DeserializeOwned>(
        &self,
        name: &str,
        body: Option<Parameter>,
        extra: Option<String>,
    ) -> T {
        let mut headers = HeaderMap::new();
        let mut url: String = format!("https://api.korrektor.uz/{name}");

        headers.append("authorization", self.token.parse().unwrap());
        headers.append("content-type", "application/json".parse().unwrap());
        headers.append("connection", "keep-alive".parse().unwrap());

        if body.is_some() {
            headers.append(
                "body",
                serde_json::to_string(&body).unwrap().parse().unwrap(),
            );
        }

        if extra.is_some() {
            url.push_str(format!("/{}", extra.unwrap()).as_str());
        }

        let text = reqwest::Client::new()
            .post(url)
            .headers(headers)
            .send()
            .await
            .expect("Failed at sending request")
            .text()
            .await
            .expect("Failed at parsing response");

        let data: T = serde_json::from_str(&text).unwrap();

        data
    }
}
