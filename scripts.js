    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let selectYear = document.getElementById("year");
    let selectMonth = document.getElementById("month");
    var selectedCell  =' d';
    
    let btn=document.getElementById("button");
    let btnTag=document.getElementById("buttonTag");

    //funktion um einen Text eintragen zu können 
    btn.addEventListener('click', function(e) {
    document.querySelectorAll('#calendar-body td').forEach(e1 => {
        if(e1.className === 'bg-success'){
            e1.innerHTML += "<br>"+ document.getElementById('myTextArea').value;

        }
    });
    });

    let months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

    let monthAndYear = document.getElementById("monthAndYear");
    showCalendar(currentMonth, currentYear);


    //funktion um in den nächsten Monat zu wechseln
    function next() {
        currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    }
    //funktion um in den vorherigen Monat zu wechseln
    function previous() {
        currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    }
    //funktion um zum ausgewählten Monat zu springen
    function jump() {
        currentYear = parseInt(selectYear.value);
        currentMonth = parseInt(selectMonth.value);
        showCalendar(currentMonth, currentYear);
    }

  

    function showCalendar(month, year) {

        let firstDay = (new Date(year, month)).getDay();
        let daysInMonth = 32 - new Date(year, month, 32).getDate();

        let tbl = document.getElementById("calendar-body"); // body des Kalenders

        // löscht alle vorherigen Zellen
        tbl.innerHTML = " ";
        // einfügen von Daten über Monat und über die Seite mit DOM.
        monthAndYear.innerHTML = months[month] + " " + year;
        selectYear.value = year;
        selectMonth.value = month;

        // Erstellen aller Zellen
        let date = 1;
        for (let i = 0; i < 6; i++) {
            // erzeugt eine Tabellenzeile
            let row = document.createElement("tr");

            //Erstellen einzelner Zellen und hinzufügen der Daten.
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    

                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(" ");
                    cell.appendChild(cellText);
                    
                    row.appendChild(cell);


                }
                else if (date > daysInMonth) {
                    break;
                }

                else {
                    let cell = document.createElement("td");
                    let cellText = document.createTextNode(date);
                    if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        cell.classList.add("bg-success");
                    }
                    

                    cell.appendChild(cellText);
                    row.appendChild(cell);
                    date++;
                }


            }

            tbl.appendChild(row); // Anhängen jeder Zeile an den Body.
        }
        document.querySelectorAll('#calendar-body td')
        .forEach(e =>{ 
    e.addEventListener("click", adddevnt)});
    }
    function adddevnt(e) {
    
    document.querySelectorAll('#calendar-body td').forEach(e1 => {
        e1.className='';
    });
    e.target.classList.add("bg-success");

}