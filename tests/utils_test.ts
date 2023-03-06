import { assertEquals } from "./deps.ts";
import { Korrektor } from "../mod.ts";

const instance = new Korrektor();

Deno.test(async function duplicateTest() {
  assertEquals(
    await instance.duplicate({ content: "daraxt chiroyli чиройли daraxt" }),
    {
      "content": "daraxt chiroyli чиройли",
      "message": "utils/duplicate",
      "query": "daraxt chiroyli чиройли daraxt",
    },
  );
});

Deno.test(async function frequencyTest() {
  assertEquals(
    await instance.frequency({ content: "daraxt chiroyli чиройли daraxt" }),
    {
      "content": {
        "chiroyli": 1,
        "daraxt": 2,
        "чиройли": 1,
      },
      "message": "utils/frequency",
      "query": "daraxt chiroyli чиройли daraxt",
    },
  );
});
