import lodash from "lodash";
import lodash4 from "lodash-4";

function main() {
  lodash.assign({ a: 1 }, { b: 2 });
  lodash4.concat([1], 2);
}

main();
