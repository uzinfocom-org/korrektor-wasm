export interface Parameters {
  content: string;
}

export interface Misspell {
  misspelled: string;
  position: number;
  suggestions: string[];
}

export interface CorrectResponse {
  "content": Misspell[];
  "message": string;
  "query": string;
}

export interface FrequencyResponse {
  "content": {
    [key: string]: number;
  };
  "message": string;
  "query": string;
}

export interface TypicalResponse {
  "content": string;
  "message": string;
  "query": string;
}
