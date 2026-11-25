// A second check that takes a while on purpose, so the pilot can interrupt a run
// after its first check has reported and before this one has.
const seconds = Number(process.env.SLOW_CHECK_SECONDS ?? 90);
await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
console.log(`slow check passed after ${seconds}s`);
