const monthYear = document.getElementById("monthYear");
const datesContainer = document.getElementById("dates");

let date = new Date();

function renderCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.innerText = date.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    datesContainer.innerHTML = "";

    // Empty boxes
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        empty.classList.add("empty");
        datesContainer.appendChild(empty);
    }

    // Dates
    for (let i = 1; i <= lastDate; i++) {
        const day = document.createElement("div");
        day.innerText = i;

        if (
            i === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) {
            day.classList.add("today");
        }

        datesContainer.appendChild(day);
    }
}

// Buttons
document.getElementById("prev").onclick = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
};

document.getElementById("next").onclick = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
};

// Initial load
renderCalendar();