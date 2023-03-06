import { assertEquals } from "./deps.ts";
import { Korrektor } from "../mod.ts";

const instance = new Korrektor();

Deno.test(async function alphabeticTest() {
  assertEquals(
    await instance.alphabetic({
      content: "G‘ozal estafeta chilonzor o'zbek chiroyli",
    }),
    {
      "content": "estafeta o‘zbek chilonzor chiroyli G‘ozal",
      "message": "tools/alphabetic",
      "query": "G‘ozal estafeta chilonzor o'zbek chiroyli",
    },
  );
});

Deno.test(async function numberTest() {
  assertEquals(await instance.number({ content: "3456" }), {
    "content": "uch ming to‘rt yuz ellik olti",
    "message": "tools/number",
    "query": "3456",
  });
});

Deno.test(async function tokenizeTest() {
  assertEquals(
    await instance.tokenize({ content: "singil chiroyli чиройли" }),
    {
      "content": "si-ngil chi-roy-li чи-рой-ли",
      "message": "tools/tokenize",
      "query": "singil chiroyli чиройли",
    },
  );
});
