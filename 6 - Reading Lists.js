const goodreadsInfo = {
  currentlyReading: [
    {
      title: "A Dance With Dragons",
      author: "George R.R. Martin"
    }
  ],

  wantToRead: [
    {
      title: "Dune: Messiah",
      author: "Frank Herbert"
    },
    {
      title: "Dune: God Emperor",
      author: "Frank Herbert"
    }
  ]
}

const addNewBooks = (books, additionalBookObject) => (
  [...books, ...additionalBookObject]
);

goodreadsInfo.currentlyReading = addNewBooks(
  goodreadsInfo.currentlyReading,
  [
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Mistborn", author: "Brandon Sanderson" }
  ]
);

const showGoodreadsInfo = (info) => {
  const { currentlyReading, wantToRead } = info;

  console.log("Currently Reading:");
  for (const book of currentlyReading) {
    console.log(`${book.title} by ${book.author}`);
  }

  console.log("\nWant to Read:");
  for (const book of wantToRead) {
    console.log(`${book.title} by ${book.author}`);
  }
};

showGoodreadsInfo(goodreadsInfo);