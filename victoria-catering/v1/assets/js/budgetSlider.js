// Записать изначальное значение input range
let budgetValue = document.getElementById('budget').value;
document.getElementById('budgetValue').innerHTML = budgetValue;
// При изменении значения записывать новое
document.getElementById('budget').addEventListener('input', evt => {
    let budgetChangedValue = document.getElementById('budget').value;
    document.getElementById('budgetValue').innerHTML = budgetChangedValue;
});
