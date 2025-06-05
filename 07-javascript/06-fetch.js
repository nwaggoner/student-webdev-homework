const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
const loading = document.querySelector("#loading");

const fetchData = (url) => {
  // Remove the loading GIF once data is loaded
  loading.style.display = "none";

  // Fetch the book data from the API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Create elements for each book
      data.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add(
          "book",
          "mb-4",
          "p-3",
          "border",
          "rounded",
          "bg-white"
        );

        // Add book information
        bookElement.innerHTML = `
          <h3 class="text-center">${book.name}</h3>
          <p class="text-center"><strong>Author:</strong> ${book.authors.join(
            ", "
          )}</p>
          <p class="text-center"><strong>Released:</strong> ${new Date(
            book.released
          ).getFullYear()}</p>
          <p class="text-center"><strong>Pages:</strong> ${
            book.numberOfPages
          }</p>
        `;

        app.appendChild(bookElement);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      loading.style.display = "none";
      app.innerHTML =
        '<p class="text-center text-danger">Failed to load books. Please try again later.</p>';
    });
};

// Center all books in the container
app.style.display = "flex";
app.style.flexDirection = "column";
app.style.alignItems = "center";

// Call the fetch function
fetchData(url);
