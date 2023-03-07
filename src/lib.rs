mod client;
mod types;

use types::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub async fn run() -> Result<JsValue, JsValue> {
    let res = reqwest::Client::new()
        .get("https://api.github.com/repos/rustwasm/wasm-bindgen/branches/master")
        .header("Accept", "application/vnd.github.v3+json")
        .send()
        .await
        .unwrap();

    let text = res.text().await.unwrap();
    let branch_info: Branch = serde_json::from_str(&text).unwrap();

    Ok(serde_wasm_bindgen::to_value(&branch_info).unwrap())
}
