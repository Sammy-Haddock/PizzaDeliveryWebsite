function calculate(){
        const cur1Value = parseFloat(document.getElementById('cur1').value);
        const rateValue = parseFloat(document.getElementById('rate').value);
        const result = cur1Value * rateValue;
        document.getElementById('cur2').value = result;
}