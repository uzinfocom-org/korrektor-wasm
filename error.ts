export class KorrektorError extends Error {
  readonly _code: number;
  readonly _description: string;

  constructor(code: number, description: string) {
    super(`telegram: ${code} ${description}`);

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
