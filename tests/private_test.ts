import { assertEquals } from "./deps.ts";
import { Korrektor } from "../mod.ts";

const instance = new Korrektor();

Deno.test(async function correctTest() {
  assertEquals(await instance.correct({ content: "chroyli" }, "lat"), {
    "content": [
      {
        "misspelled": "chroyli",
        "position": 0,
        "suggestions": [
          "choyli",
          "chiroyli",
          "chorpoyli",
          "choroynali",
          "choykorli",
          "chiroyi",
          "zichroqli",
        ],
      },
    ],
    "message": "private/correct/content",
    "query": "chroyli",
  });
});

Deno.test(async function modifiersTest() {
  assertEquals(await instance.removeModifiers({ content: "stul stul-ku" }), {
    "content": "stul stul",
    "message": "private/correct/modifiers",
    "query": "stul stul-ku",
  });
});

Deno.test(async function syntaxTest() {
  assertEquals(
    await instance.correctSyntax({ content: "2022-йил 12 yanvar g'ozal" }),
    {
      "content": "2022 йил 12-yanvar g‘ozal",
      "message": "private/correct/syntax",
      "query": "2022-йил 12 yanvar g'ozal",
    },
  );
});

Deno.test(async function transliterateTest() {
  assertEquals(await instance.transliterate({ content: "chiroyli" }, "cyr"), {
    "content": "чиройли",
    "message": "private/transliterate",
    "query": "chiroyli",
  });
});
