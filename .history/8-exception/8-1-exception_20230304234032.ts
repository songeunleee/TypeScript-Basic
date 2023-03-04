//  Java: Exception
//  JavaScript: Error

//  Error(Exception) Handling: try -> catch -> finaly

function readFile(fileName: string): string {
  return "file contents";
}

function closeFile(fileName: string) {}

const fileName = "not exist! 💩";
try {
  console.log(readFile(fileName));
} catch (e) {
  //실패시 실행
  console.log("catched!!");
} finally {
  // 실패해도 실행되고, 실패하지 않아도 실행됨
  closeFile(fileName);
  console.log(`finally!!`);
}

console.log(`!!!`);
