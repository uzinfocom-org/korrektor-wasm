import { Client } from "./client.ts";
import {
  CorrectResponse,
  FrequencyResponse,
  Parameters,
  TypicalResponse,
} from "./types.ts";

export class Korrektor extends Client {
  /** ref: https://docs.korrektor.uz/correct#get-correction-suggestions */
  correct(
    parameters: Parameters,
    language: "cyr" | "lat",
  ): Promise<CorrectResponse> {
    return this.method<CorrectResponse>(
      "/private/correct/content",
      { ...parameters },
      language,
    );
  }

  /** ref: https://docs.korrektor.uz/correct#remove-modifiers */
  removeModifiers(parameters: Parameters): Promise<TypicalResponse> {
    return this.method<TypicalResponse>(
      "/private/correct/modifiers",
      { ...parameters },
    );
  }

  /** ref: https://docs.korrektor.uz/correct#correct-syntax */
  correctSyntax(parameters: Parameters): Promise<TypicalResponse> {
    return this.method<TypicalResponse>(
      "/private/correct/syntax",
      { ...parameters },
    );
  }

  /** ref: https://docs.korrektor.uz/transliterate#get-transliterated-text */
  transliterate(
    parameters: Parameters,
    language: "cyr" | "lat",
  ): Promise<TypicalResponse> {
    return this.method<TypicalResponse>(
      "/private/transliterate",
      { ...parameters },
      language,
    );
  }

  /** ref: https://docs.korrektor.uz/alphabetic#get-sorted-words */
  alphabetic(
    parameters: Parameters,
  ): Promise<TypicalResponse> {
    return this.method<TypicalResponse>(
      "/tools/alphabetic",
      { ...parameters },
    );
  }

  /** ref: https://docs.korrektor.uz/number#get-word-from-integer */
  number(
    parameters: Parameters,
  ): Promise<TypicalResponse> {
    return this.method<TypicalResponse>(
      "/tools/number",
      { ...parameters },
    );
  }

  /** ref: https://docs.korrektor.uz/tokenize#get-words-in-syllables */
  tokenize(
    parameters: Parameters,
  ): Promise<TypicalResponse> {
    return this.method<TypicalResponse>(
      "/tools/tokenize",
      { ...parameters },
    );
  }

  /** ref: https://docs.korrektor.uz/duplicate#get-text-without-duplicates */
  duplicate(
    parameters: Parameters,
  ): Promise<TypicalResponse> {
    return this.method<TypicalResponse>(
      "/utils/duplicate",
      { ...parameters },
    );
  }

  /** ref: https://docs.korrektor.uz/frequency#get-frequency-map-of-words */
  frequency(
    parameters: Parameters,
  ): Promise<FrequencyResponse> {
    return this.method<FrequencyResponse>(
      "/utils/frequency",
      { ...parameters },
    );
  }
}
