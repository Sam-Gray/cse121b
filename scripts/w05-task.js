/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* Function to display temples */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

/* Function to get temples using fetch() */
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList.length = 0; // Clear the templeList
  templeList.push(...await response.json()); // Convert response to JSON and add to templeList
  displayTemples(templeList); // Call the displayTemples function
};

/* Function to reset displayed temples */
const reset = () => {
  templesElement.innerHTML = ""; // Clear the content of templesElement
};

/* Function to sort temples based on selected value */
const sortBy = (temples) => {
  reset(); // Clear the displayed list of temples
  const filter = document.querySelector("#sortBy").value; // Get the selected filter value

  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
      case "notutah":
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;      
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "alphabetical":
      displayTemples(temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName)));
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

/* Event Listener: Sort By Element change */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList); });

/* Calling getTemples function at the bottom of the JavaScript file */
getTemples();