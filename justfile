#!/usr/bin/env just --justfile

build:
	cargo build --release

pack:
  wasm-pack build --target web

lint:
  cargo clippy

fmt:
  cargo fmt