// 30.1 Yup.
function foo() {
  return true;
}



// 30.2 No, but seriouly:
/**
 * - Whichever testing framework you use, you should be writing tests!
 * - Strive(力争) to write many small pure functions, and minimize where mutations occur.
 * - Be cautious about stubs(存根) and mocks - they can make your test more brittle.
 * - We primarily use `mocha` and `jest` at Airbnb. `tape` is also used occasionally for small, separate modules.
 * - 100% test coverage(覆盖面) is a good goal to strive for, even if it's not always practical to reach it.
 * - Whether you fix a bug, write a regression(倒退、回溯) test. A bug fixed without a regression test is almost certainly going to break again in the future.
 */