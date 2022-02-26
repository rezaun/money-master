//Declear variable 
const saveingAmount     = document.getElementById('saving-amount');
const remainingAmount   = document.getElementById('remaining-balance');
const balanceText       = document.getElementById('balance');

function getInputValue(inputId) {
    const inputField        = document.getElementById(inputId);
    const inputAmountText   = inputField.value;
    const inputValue        = parseFloat(inputAmountText);
    
    //clear input field
    inputField.value        = '';
    return inputValue;
}

//Calculte income and expense
document.getElementById('calculate-button').addEventListener('click', function(){

    const incomeInput   = getInputValue('income-input');
    const foodInput     = getInputValue('food-input');
    const rentInput     = getInputValue('rent-input');
    const clothesInput  = getInputValue('cloths-input');

  if(isNaN(incomeInput) || incomeInput < 0){
        return alert('Please put valid income only positive number please');       
        
    } else  if(isNaN(foodInput) || foodInput < 0){
        return alert('Please put valid Foods cost value only positive number please');

    } else  if(isNaN(rentInput) || rentInput < 0){
        return alert('Please put valid Rent cost value only positive number please');

    } else  if(isNaN(clothesInput) || clothesInput < 0){
        return alert('Please put valid Cloths cost value only positive number please');

    }
    let totalThreeExpense   = foodInput + rentInput + clothesInput;    
    let balance             = incomeInput - totalThreeExpense;   

    // update balance and expense total
    const totalExpense      = document.getElementById('total-expense');
    const totalBalance      = document.getElementById('balance');

    if(totalThreeExpense > incomeInput){

        return alert('You can not expense too much... You income still growing. ');

    }
    //Update expnse
    const totalExpenseText  = totalExpense.innerText;
    totalExpense.innerText  = totalThreeExpense;
    
    //update Balance
    const totalBalanceText  = totalBalance.innerText;
    totalBalance.innerText  = balance;    


})

//Save calculate 
document.getElementById('save-button').addEventListener('click', function(){
    const saveInput  = getInputValue('save-input');

    if(isNaN(saveInput) || saveInput < 0){
        return alert('Please write positive value in the save field');
    }
    if(saveInput < balanceText){        
        return alert('Your desire saving amout is greater then your remain income');
    }
    const balanceTextAmount = balanceText.innerText;
    const finalSave         = Math.round(balanceTextAmount / saveInput );
    

    //Update saving Amount 
    saveingAmount.innerText = finalSave;

    // update Remaining Balance
    const finalBalance        = balanceTextAmount - finalSave ;
    const remainingBalance    = Math.round(remainingAmount.innerText);
    remainingAmount.innerText = finalBalance;
    


    
})