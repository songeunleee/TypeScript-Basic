//  Java: Exception
//  JavaScript: Error

//  Error(Exception) Handling: try -> catch -> finaly

function readFile(fileName: string): string {
  if (fileName === "not exist! 💩") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}
