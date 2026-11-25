import assert from "node:assert/strict";
import { test } from "node:test";
import { farewell } from "../src/farewell.js";

test("farewell names the person", () => {
	assert.equal(farewell("Ada"), "Goodbye, Ada!");
});
