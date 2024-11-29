// Function to update site language and hide the selected language card
function changeSiteLanguage() {
    const siteLanguage = document.getElementById("siteLanguage").value; // Get selected site language
    const languageCards = document.querySelectorAll(".language-card"); // Get all language cards

    // Update the site title to reflect the selected language
    const siteLanguageMap = {
        en: "I Want to Learn...",
        pt: "Eu Quero Aprender...",
        fr: "Je Veux Apprendre...",
        de: "Ich Möchte Lernen...",
        hi: "मैं सीखना चाहता हूँ...",
        ur: "میں سیکھنا چاہتا ہوں..."
    };

    // Change the title based on selected language
    document.getElementById("siteTitle").textContent = siteLanguageMap[siteLanguage];

    // Loop through all language cards
    languageCards.forEach(card => {
        const cardLanguage = card.getAttribute("data-lang"); // Get language of the card
        // Show all cards initially
        card.style.display = "block";

        // Hide the card if it matches the site language
        if (cardLanguage === siteLanguage) {
            card.style.display = "none";
        }
    });
}

// Initial call to set up the default state
changeSiteLanguage();
