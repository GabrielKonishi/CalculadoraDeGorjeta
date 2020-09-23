function calculateTip(event) {
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;
    if (!bill || !serviceQual || !numOfPeople) {
        alert('necessário que os campos tenham valores');
    } else {
        (bill * serviceQual) / numOfPeople
        return
    }
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

/*identifica o ID atraves do getElement e adiciona um 'Event Listener' 
passando como parametro o tipo e a função a ser chamada */
document.getElementById('tipsForm').addEventListener('submit', calculateTip);