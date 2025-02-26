const ethnicGroups = {
    "Oromo": "Oromo is Ethiopia's largest ethnic group, making up about 34% of the population...",
    "Amhara": "The Amhara people have played a crucial role in Ethiopian history, especially in the establishment of the Ethiopian empire...",
    "Tigray": "The Tigray ethnic group has a deep history, particularly linked to the ancient Kingdom of Aksum...",
    "Sidama": "The Sidama people are known for their rich coffee-growing traditions and unique cultural practices...",
    "Gurage": "The Gurage are famous for their entrepreneurial spirit and their unique food culture, especially their staple enset...",
    "Wolaita": "The Wolaita ethnic group is a southern Ethiopian community with a distinct language and culture...",
    "Afar": "The Afar people are semi-nomadic and primarily live in the Afar region of Ethiopia...",
    "Somali": "The Somali ethnic group in Ethiopia shares cultural and linguistic ties with Somalia and Djibouti...",
    // Add more ethnic groups here...
};

function searchEthnicGroup() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let infoSection = document.getElementById("info");

    if (ethnicGroups[input]) {
        infoSection.innerHTML = `<p>${ethnicGroups[input]}</p>`;
    } else {
        infoSection.innerHTML = `<p>No matching ethnic group found. Try a different name.</p>`;
    }
}