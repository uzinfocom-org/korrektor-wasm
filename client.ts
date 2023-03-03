import { KorrektorError } from "./error.ts";

export class Client {
  readonly _token: string;

  constructor(token: string) {
    this._token = token;
  }

  async method<T>(
    name: string,
    payload?: Record<any, any>,
  ): Promise<T> {
    const res = await fetch(
      `https://api.korrektor.uz/${name}`,
      {
        method: "POST",
        headers: {
          "authorization": `Bearer ${this._token}`,
          "content-type": "application/json",
          connection: "keep-alive",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await res.json();

    if (!data.ok) {
      throw new KorrektorError(data.error_code, data.description);
    }

    return data.result;
  }
}
