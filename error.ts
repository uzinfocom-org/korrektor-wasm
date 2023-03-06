export class KorrektorError extends Error {
  readonly _code: number;
  readonly _description: string;

  constructor(code: number, description: string) {
    super(`error: ${code} ${description}`);

    this._code = code;
    this._description = description;
  }

  get code(): number {
    return this._code;
  }

  get description(): string {
    return this._description;
  }
}

export class NetworkError extends Error {
  readonly _code: number;
  readonly _description: string;

  constructor(code: number, description: string) {
    super(`error: ${code} ${description}`);

    this._code = code;
    this._description = description;
  }

  get code(): number {
    return this._code;
  }

  get description(): string {
    return this._description;
  }
}
