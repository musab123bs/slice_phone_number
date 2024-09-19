   getNum = document.querySelectorAll('.numb_wrap ul li');

            getNum.forEach(ele => {
                const value = ele.textContent.trim();
                    pureVal = value.replace(/\D/g, '');
                    if(pureVal.length === 10){
                        getNum = pureVal.slice(-10);
                        countryCode = getNum.slice(0, 3);
                        middleCode = getNum.slice(3, 6);
                        lastCode = getNum.slice(6);

                        ele.textContent = `(${countryCode}) ${middleCode}-${lastCode}`;
                    } 
                    else {
                        ele.textContent = "Invalid";
                    }
})
