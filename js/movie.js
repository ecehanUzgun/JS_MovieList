    //< !--JS-->
    //< !--appendChild(): add new elements to an existing HTML structure dynamically.-- >
    //<script>
    //    function AddMovie() {
    //        //Input de�erini al
    //        let inputName = document.getElementById("inputName");
    //    let inputDescription = document.getElementById("inputDescription");

    //    //tr olu�tur
    //    let tr = document.createElement("tr");

    //    //td olu�tur
    //    let tdName = document.createElement("td");
    //    let tdDesc = document.createElement("td");

    //    tdName.append(inputName.value);
    //    tdDescription.append(inputDescription.value);


    //    let tbody = document.getElementById("tblMovie");

    //    tr.append(tdName);
    //    tr.append(tdDescription);

    //    document.getElementById("inputName").value;
    //    document.getElementById("inputDescription").value;
    //    }
//</script>
// Film ekleme fonksiyonu
function AddMovie() {
    
    let inputName = document.getElementById("inputName").value;
    let inputDescription = document.getElementById("inputDescription").value;

    // Yeni sat�r 
    const newRow = `<tr>
                        <td>${inputName}</td>
                        <td>
                            ${inputDescription}
                            <button class="btn btn-sm btn-danger" onclick="DeleteMovie">Delete</button>
                        </td>
                    </tr>`;

  
    document.getElementById("tblMovie").innerHTML += newRow;

    
    document.getElementById("inputName").value = "";
    document.getElementById("inputDescription").value = "";
}

function DeleteMovie() {
    
}