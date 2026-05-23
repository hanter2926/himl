// 1. Dummy Data (Database ki tarah kaam karega)
const database = [
    {
        title: "Bootstrap 5 Tutorial - Hindi Mein",
        url: "https://www.example.com/bootstrap-hindi",
        desc: "Bootstrap ek powerful frontend framework hai jisse aap responsive websites bahut jaldi bana sakte hain."
    },
    {
        title: "HTML aur CSS Seekhein",
        url: "https://www.learning.com/web-design",
        desc: "Web development ki shuruat hamesha HTML aur CSS se hoti hai. Yeh basics hain."
    },
    {
        title: "JavaScript Programming Guide",
        url: "https://www.js-guide.com",
        desc: "JavaScript se aap apni website ko interactive bana sakte hain. Yeh ek versatile language hai."
    },
    {
        title: "Gemini AI Kya Hai?",
        url: "https://www.google.com/gemini",
        desc: "Gemini Google ka sabse advance AI model hai jo aapke mushkil sawalon ke jawab de sakta hai."
    }
];

// 2. Logic: Search Query ko URL se nikalna
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q'); // 'q' wahi name hai jo input field mein hona chahiye

    if (query) {
        displayResults(query);
    }
});

// 3. Logic: Results ko Page par dikhana
function displayResults(query) {
    const resultsContainer = document.getElementById("results-list");
    if(!resultsContainer) return;

    // Filter data based on search
    const filteredResults = database.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase())
    );

    // Agar results mile toh dikhao, nahi toh "Not Found"
    if (filteredResults.length > 0) {
        resultsContainer.innerHTML = filteredResults.map(item => `
            <div class="result-item mb-4">
                <a href="${item.url}" class="text-decoration-none">
                    <h4 class="text-primary mb-0">${item.title}</h4>
                </a>
                <small class="text-success">${item.url}</small>
                <p class="mt-1">${item.desc}</p>
            </div>
        `).join('');
    } else {
        resultsContainer.innerHTML = `<h3 class="text-muted mt-5 text-center">Afsoos! "${query}" ke liye koi result nahi mila.</h3>`;
    }
}