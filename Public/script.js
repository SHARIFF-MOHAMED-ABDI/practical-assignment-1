// Personalized Greeting
const studentName = prompt("Welcome to USIU! What's your first name?");
if (studentName) {
    alert("Karibu, " + studentName + "!");
    console.log(`Student entered name: ${studentName}`);
    document.getElementById("greeting").textContent = `Hello, ${studentName} 👋`;
} else {
    alert("Name is required to proceed.");
    document.getElementById("greeting").textContent = "Hello, Guest 👋";
}

// Estimator function
function runEstimator() {
    try {
        const days = Number(prompt("How many days per week do you come to campus? (e.g., 3)"));
        const costPerTrip = Number(prompt("Average transport cost per trip in KSh? (e.g., 120)"));
        const snacksPerDay = Number(prompt("Snacks per day? (e.g., 2)"));
        const snackPrice = Number(prompt("Average price per snack in KSh? (e.g., 80)"));
        
        if (isNaN(days) || isNaN(costPerTrip) || isNaN(snacksPerDay) || isNaN(snackPrice)) {
            alert("Please enter valid numbers for all fields.");
            return;
        }

        const transportWeekly = days * costPerTrip * 2; // to & from
        const snacksWeekly = days * snacksPerDay * snackPrice;
        const totalWeekly = transportWeekly + snacksWeekly;
        const save10 = totalWeekly * 0.10;
        const totalWithSavings = totalWeekly - save10;
        
        console.log(`
-------------------------------------------------
          Estimator Results:
-------------------------------------------------
Weekly Transport: KSh ${transportWeekly}
Weekly Snacks: KSh ${snacksWeekly}
-------------------------------
Weekly Total: KSh ${totalWeekly}
If you cut 10%: KSh ${Math.round(totalWithSavings)}
-------------------------------------------------
`);
        const summary = `
-------------------------------------------------
          Estimator Results:
-------------------------------------------------
Weekly Transport: KSh ${transportWeekly}
Weekly Snacks: KSh ${snacksWeekly}
-------------------------------
Weekly Total: KSh ${totalWeekly}
If you cut 10%: KSh ${Math.round(totalWithSavings)}
-------------------------------------------------
`;

        document.getElementById("summary").innerText = summary;
        alert("Check your summary on the page. All details logged to console for debugging.");
    } catch (error) {
        console.error("Error running estimator:", error);
        alert("An error occurred. Please try again.");
    }
}

// Theme Toggle function
function toggleTheme() {
    const current = document.body.style.backgroundColor;
    const newBgColor = (current === "white" || current === "") ? "#111" : "white";
    document.body.style.backgroundColor = newBgColor;
    document.body.style.color = (newBgColor === "#111") ? "white" : "black";
    console.log(`Theme toggled. Background now: ${newBgColor}`);
}

// Linking JS functions to buttons
document.getElementById("run").addEventListener("click", runEstimator);
document.getElementById("theme").addEventListener("click", toggleTheme);
