//  Java: Exception
//  JavaScript: Error

//  Error(Exception) Handling: try -> catch -> finaly

function readFile(fileName: string): string {
  if (fileName === "not exist! đŠ") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}

const fileName = "not exist! đŠ";
try {
  console.log(readFile(fileName));
} catch (e) {
  //ě¤í¨ě ě¤í
  console.log("catched!!");
} finally {
  // ě¤í¨í´ë ě¤íëęł , ě¤í¨íě§ ěěë ě¤íë¨
  closeFile(fileName);
  console.log(`finally!!`);
}

console.log(`!!!`);
