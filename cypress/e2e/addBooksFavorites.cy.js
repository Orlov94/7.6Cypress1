beforeEach(() => {
  cy.visit("/");
  cy.login("test@test.com", "test");
});

it("Add book", () => {
  // cy.viewport("iphone-8");
  cy.addBook(
    "О дивный новый мир, Олдос Хаксли",
    "Заводной апельсин, Энтони Берджесс",
    "1984, Джордж Оруэлл",
    "Крестный отец, Марио Пьюзо"
  );
  cy.contains("Крестный отец, Марио Пьюзо").should("be.visible");
});

it("Add to favorite", () => {
  //cy.viewport("macbook-13");
  cy.addBookToFavorite(
    "О дивный новый мир, Олдос Хаксли",
    "Заводной апельсин, Энтони Берджесс",
    "1984, Джордж Оруэлл",
    "Крестный отец, Марио Пьюзо"
  );
  cy.contains("О дивный новый мир, Олдос Хаксли").should("be.visible");
});

it("Delete book in favorite", () => {
  cy.get("h4").click();
  cy.deleteBook("1984, Джордж Оруэлл");
});
