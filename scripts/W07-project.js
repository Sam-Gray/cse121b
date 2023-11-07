document.addEventListener("DOMContentLoaded", function () {
    const jsonUrl = "Ammatadiio-lodge.JSON";
    const cardContainer = document.getElementById("card-container");

    function createCard(item) {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = item["Table 1"];
        img.alt = "Card Image";
        card.appendChild(img);

        const cardDetails = document.createElement("div");
        cardDetails.className = "card-details";

        const issuer = document.createElement("p");
        issuer.className = "issuer";
        issuer.textContent = "Issuer: " + item.issuer;
        cardDetails.appendChild(issuer);

        const issueDate = document.createElement("p");
        issueDate.className = "issue-date";
        issueDate.textContent = "Issue Date: " + item.issuedate;
        cardDetails.appendChild(issueDate);

        const quantity = document.createElement("p");
        quantity.className = "quantity";
        quantity.textContent = "Quantity: " + item.qty;
        cardDetails.appendChild(quantity);

        card.appendChild(cardDetails);

        return card;
    }

    function displayCards() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((item) => {
                    const card = createCard(item);
                    cardContainer.appendChild(card);
                });
            })
            .catch((error) => {
                console.error("Error fetching JSON:", error);
            });
    }

    function updateJSONFile(data) {
        return fetch(jsonUrl, {
            method: 'PUT', // Use PUT method to update the JSON file
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convert the updated data back to JSON
        });
    }

    function addCardToJSON(newCard) {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((data) => {
                data.push(newCard); // Add the new card to the existing data
                return updateJSONFile(data);
            })
            .then(() => {
                // Clear the form fields
                document.getElementById("url").value = "";
                document.getElementById("issuer").value = "";
                document.getElementById("issuedate").value = "";
                document.getElementById("qty").value = "";

                // Display the newly added card
                const card = createCard(newCard);
                cardContainer.appendChild(card);
            })
            .catch((error) => {
                console.error("Error updating JSON:", error);
            });
    }

    // Function to filter cards based on a key and value
    function filterCards(key, value) {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            const cardDetails = card.querySelector(".card-details");
            const cardValue = cardDetails.querySelector(`.${key}`);
            if (cardValue) {
                if (cardValue.textContent.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    }

    // Add event listeners for filters
    const filters = document.querySelectorAll(".filter");
    filters.forEach((filter) => {
        filter.addEventListener("change", () => {
            const key = filter.getAttribute("data-key");
            const value = filter.value;
            filterCards(key, value);
        });
    });

    // Handle the form submission to add a new card
    const addCardForm = document.getElementById("add-card-form");
    addCardForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const url = document.getElementById("url").value;
        const issuer = document.getElementById("issuer").value;
        const issuedate = document.getElementById("issuedate").value;
        const qty = document.getElementById("qty").value;

        // Create a new card object
        const newCard = {
            "Table 1": url,
            "issuer": issuer,
            "issuedate": issuedate,
            "qty": qty
        };

        addCardToJSON(newCard);
    });

    // Call the function to display the cards
    displayCards();
});
