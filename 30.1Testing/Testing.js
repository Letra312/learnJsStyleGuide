// 30.1 Yup.
function foo() {
  return true;
}



// 30.2 No, but seriouly:
/**
 * - Whichever testing framework you use, you should be writing tests!
 * - Strive to write many small pure functions, and minimize where mutations occur.
 * - Be cautious about stubs and jest at Airbnb. `tape` is also used occasionally for small, separate modules.
 * - 100% test coverage is a good goal to strive for, even if it's not always practical to reach it.
 * - Whether you fix a bug, write a regression test. A bug fixed without a regression test is almost certainly going to break again in the future.
 */