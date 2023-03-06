import { KorrektorError, NetworkError } from "./error.ts";

export class Client {
  readonly _token: string;

  constructor(token: string = "D2~0$oau@Zp{Wy06B!Ye$DmUT(P1Q{$t") {
    this._token = token;
  }

  async method<T>(
    name: string,
    body?: Record<string, unknown>,
    extra?: string,
  ): Promise<T> {
    const res = await fetch(
      `https://api.korrektor.uz/${name}${extra ? `/${extra}` : ""}`,
      {
        method: "POST",
        headers: {
          "authorization": `Bearer ${this._token}`,
          "content-type": "application/json",
          connection: "keep-alive",
        },
        body: JSON.stringify(body),
      },
    );

    if (!res.ok) {
      throw new NetworkError(res.status, res.statusText);
    }

    const data = await res.json();

    if (!data) {
      throw new KorrektorError(data.error_code, data.description);
    }

    return data;
  }
}
