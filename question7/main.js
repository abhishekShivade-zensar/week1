var count=0;
for (var half=0; half<=2; half++) {
    for (var qtr=0; qtr<=4; qtr++) {
        for (var dime=0; dime<=10; dime++) {
            for (var nick=0; nick<=20; nick++) {
                for (penny=0; penny<=100; penny++) {
                    console.log("penny");
                    if (50*half + 25*qtr + 10*dime + 5*nick + penny == 100) {
                        count++;
                    }
                }
            }
        }
    }
}
alert(count);