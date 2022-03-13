Sample repo for https://github.com/facebook/jest/issues/12262

Run `npm run test:e2e` without Redis running to get

```
FAIL  test/app.e2e-spec.ts
  AppController (e2e)
    ✕ / (GET) (659 ms)

  ● AppController (e2e) › / (GET)

    thrown: undefined

      at _getError (../node_modules/jest-circus/build/utils.js:566:18)
          at Array.map (<anonymous>)
```

Start Redis locally on port 6379 (or change the config in `app.module.ts`) and run `npm run test:e2e` to get

```
PASS  test/app.e2e-spec.ts
  AppController (e2e)
    ✓ / (GET) (252 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.851 s, estimated 3 s
Ran all test suites.
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

(and it freezes).
