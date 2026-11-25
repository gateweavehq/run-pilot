import assert from "node:assert/strict";
import { test } from "node:test";
import { greet } from "../src/greet.js";

test("greet names the person", () => {
	assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greet uses the supplied greeting", () => {
	assert.equal(greet("Ada", "Hi"), "Hi, Ada!");
});
