import * as filesize from "filesize";

async function main() {
  const x = filesize(1000);
  console.log(x);
}

main();
