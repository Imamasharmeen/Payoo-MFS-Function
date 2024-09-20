console.log('add money loaded');
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('add money button clicked');

        //getInputFieldValueById();
        // addMoney = getInputFieldValueById();
        //console.log('add money', addMoney)
        // const addMoney = document.getElementById('input-add-money').value;
        // const addMoneyNumber = parseFloat(addMoney);

        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number')
        console.log('add money', addMoney, pinNumber)
    });