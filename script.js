const sendBtn = document.querySelector('#btn'),
      firstScreen = document.querySelector('.first-screen'),
      secondScreen = document.querySelector('.second-screen'),
      ratePanel = document.querySelector('.rate-panel'),
      rateNumbers = document.querySelectorAll('.rate-number'),
      selectedValue = document.querySelector('#value');


ratePanel.addEventListener('click', (e) => {
    chooseRate(e);
});


sendBtn.addEventListener('click', () => {
    hideRateWindow();
});


function chooseRate(e){
    let target = e.target;

    if (target.classList.contains('rate-number')){
        rateNumbers.forEach(num => num.classList.remove('active'));
        target.classList.add('active');

        sendBtn.classList.remove('disabled');

        let value = target.dataset.value;
        selectedValue.textContent = value;
    }
}


function hideRateWindow(){
    firstScreen.classList.add('none');
    secondScreen.classList.remove('none');

    setTimeout(() => {
        location.reload();
    }, 10000);
}