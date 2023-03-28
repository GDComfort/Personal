function priority() {
    const scheddata = []

    console.log(` Program has started. Reload page to reset. `)
    let schedlen = parseInt(prompt("Enter the number of processes: "))
    for (i = 0; i < parseInt(schedlen); i++) {
        let T = parseInt(prompt(`Enter a time for process ${i+1}: `))
        scheddata.push(T);
    }

    let Schd = scheddata.slice();
    const Prio = []
    let WT = 0
    let TTL = 0
    let pseudoWT = 0
    let pseudoTTL = 0
    let ST = 0
    let TAT = 0

    for (i = 0; i < parseInt(schedlen); i++) {
        let T = parseInt(prompt(`Enter a Priority for process ${i+1}: `))
        Prio.push(T);
    }

    console.log(`\nThe processes are: [${Schd}]`)
    console.log(`The Priority is: [${Prio}]`)

    for (i = 0; i < parseInt(schedlen); i++) {
        for (j = 1; j < parseInt(Prio.length); j++) {
            while (parseInt(Prio[j-1]) < parseInt(Prio[j])) {
                var T = Prio[j-1];
                var T2 = Schd[j-1];
                Prio[j-1] = Prio[j];
                Prio[j] = T;
                Schd[j-1] = Schd[j];
                Schd[j] = T2;
            }
        }
    }

    console.log(`\nThe sorted processes are: [${Schd}]`)
    console.log(`The sorted priority is: [${Prio}]`)

    for (i = 0; i < parseInt(schedlen); i++) {
        let num = parseInt(Schd[i])
        console.log(`\nStarting process ${i+1}.`)
        while (num >= 1) {
            console.log(`${num}`)
            num--;
            TTL++;
            ST++;
        //pseudoTTL++;
        }
        console.log(`Process finished. Service time required to complete was: ${ST}`)
        console.log(`Total time waiting to finish process was: ${TTL}`)
        TAT = TAT + (parseInt(TTL - ST));
        ST = 0
    }
    let AvgWT = (parseInt(TTL / schedlen));
    let AvgTAT = (parseInt(TAT / schedlen));

    console.log(`\nProcesses Finished. Total Waiting Time was: ${parseInt(TTL)}.`)
    console.log(`Average Wait Time: ${parseInt(AvgWT)}.`)
    console.log(`Turnaround Time: ${parseInt(TAT)}.`)
    console.log(`Average Turnaround: ${parseInt(AvgTAT)}.`)
}

/*
function roundrobin() {
    const scheddata = [];

  //  let maxSchd = parseInt(prompt("Enter the maximum size of the processes."))
    console.log(` Program has started. Reload page to reset. `)
    let schedlen = parseInt(prompt("Enter the number of processes: "))
    for (i = 0; i < parseInt(schedlen); i++) {
        let T = parseInt(prompt(`Enter a time for process ${i+1}: `))
        //if (maxSchd < parseInt(T)) {
       //     maxSchd = parseInt(T)
       // }
        scheddata.push(T);
    }
    const maxSchd = scheddata.reduce((a, b) => Math.max(a, b), -Infinity);

    let Schd = scheddata.slice();
    let schedlen2 = schedlen
    let WT = [0, 0]
    let TW = [0]
    let TAT = [0]
    let RC = 0
    let AvgWT = [0]

    while (schedlen && WT.length && maxSchd >= 0) {
        console.log(`Round ${RC+1} starting.`)
        for (i = 0; i < schedlen; i++) {
            let num = Schd[i]
            console.log(`${num}`)
            num--;
            for (i = 0; i < WT.length; i++) {
                WT[i]++;
            }
            for (i = 0; i < TW.length; i++) {
                TW[i]++;
            }
        }
        RC++; 
        if (Schd.includes(0)) {
            console.log(`One process was finished. The total waiting time for that process was: ${WT[0]}.`)
            Schd.pop(0);
            WT[1] = 0
            schedlen = Schd.length
        }
        console.log(`Round ${RC} done.`)
        console.log(`Round ${RC+1} Starting.`)
    }
    //for (i = 0; i < TW.length; i++) {
    //    AvgWait[0] += parseInt(TW[i] / schedlen2);
    //}
    console.log(`Aborting Round ${RC+1}, No more processes.`)
    console.log(`${RC} processes were finished. Total Waiting Time was ${TW}. `)
    console.log(`Average Waiting time was ${AvgWait}.`)
}
*/

function sjn() {
    const scheddata = []

    console.log(` Program has started. Reload page to reset. `)
    let schedlen = parseInt(prompt("Enter the number of processes: "))
    for (i = 0; i < parseInt(schedlen); i++) {
        let T = parseInt(prompt(`Enter a time for process ${i+1}: `))
        scheddata.push(T);
    }

    let Schd = scheddata.slice();
    let ST = 0
    let TTL = 0
    let TAT = 0

    console.log(`\nThe processes are: [${Schd}]`)

    for (i = 0; i < parseInt(schedlen); i++) {
        for (j = 1; j < parseInt(schedlen); j++) {
            while (parseInt(Schd[j - 1]) > parseInt(Schd[j])) {
                let T = Schd[j-1];
                Schd[j-1] = Schd[j];
                Schd[j] = T;
            }
        }
    }

    console.log(`\nThe sorted processes are [${Schd}]`)

    for (i = 0; i < parseInt(Schd.length); i++) {
        let num = parseInt(Schd[i])
        console.log(`\nStarting Process ${i+1}.`)
        while (num >= 1) {
            console.log(`${num}`)
            num--;
            ST++;
        }
        console.log(`Process finished. Total Service Time was: ${ST}`)
        TTL += ST;
        console.log(`The total time waiting to finish was: ${TTL}.`)
        TAT += (TTL - ST);
        ST = 0
    }
    let AvgWT = (TTL / schedlen);
    let AvgTAT = (TAT / schedlen);

    console.log(`\nProcesses Finished. Total waiting time was: ${TTL}.`)
    console.log(`Avg Wait Time: ${AvgWT}.`)
    console.log(`Turnaround time: ${TAT}.`)
    console.log(`Avg Turnaround: ${AvgTAT}`)
}



//Possible other Round Robin based off the one in my original Python Script
function roundrobin() {
    const scheddata = []

    console.log(` Program has started. Reload page to reset. `)
    let schedlen = parseInt(prompt("Enter the number of processes: "))
    for (i = 0; i < parseInt(schedlen); i++) {
        let T = parseInt(prompt(`Enter a time for process ${i+1}: `))
        scheddata.push(T);
    }

    let Schd = scheddata.slice();
    let Schd2 = scheddata.slice();
    const WT = [0]
    let TTL = 0 
    let quantum = 5
    let ST = 0
    const TAT = [0]
    let TTAT = 0
    let Time = 0
    let T = 0
    let Temp = 0

    while(1) {
        let done = true
        for (i = 0; i < parseInt(schedlen); i++) {
            if (parseInt(Schd[i]) > 0) {
                done = false
                if (parseInt(Schd[i]) > quantum) {
                    Time += quantum;
                    Schd[i] = parseInt(Schd[i]) - quantum;
                }
                else {
                    Time += parseInt(Schd[i]);
                    T = Time - parseInt(Schd2[i]);
                    WT.push(T);
                    Schd[i] = 0
                }
            }
        }
        if (done = true) {
            break
        }
    }

    // Doesn't work for elements larger than 7?
    for (i = 0; i < parseInt(schedlen); i++) {
        Temp = parseInt(Schd2[i]) + parseInt(WT[i]);
        TAT.push(Temp);
        TTAT += parseInt(TAT[i]);
        TTL += Schd2[i];
    }


    AvgWT = (TTL / schedlen);
    AvgTAT = (TTAT / schedlen);
    console.log(`\nThe total waiting time for all processes was: ${TTL}`)
    console.log(`The average waiting time was: ${AvgWT}`)
    console.log(`The total turnaround time was: ${TTAT}`)
    console.log(`The average turnaround time was: ${AvgTAT}`)
}


function FCFS() {
    const scheddata = []

    console.log(` Program has started. Reload page to reset. `)
    let schedlen = parseInt(prompt("Enter the number of processes: "))
    for (i = 0; i < parseInt(schedlen); i++) {
        let T = parseInt(prompt(`Enter a time for process ${i+1}: `))
        scheddata.push(T);
    }

    let Schd = scheddata.slice();
    let ST = 0
    let TW = 0
    let TAT = 0
    
    for (i = 0; i < schedlen; i++) {
        let num = parseInt(Schd[i])
        console.log(`\nStarting process ${i+1}`)
        while (num >= 1) {
            console.log(`${num}`)
            num--;
            ST++;
        }
        console.log(`Process Finished, Service time to finish the process was: ${ST}`)
        TW += ST;
        console.log(`The total time waiting to finish process was: ${TW}`)
        TAT += (TW - ST);
        ST = 0;
    }
    let AvgWT = (TW / schedlen);
    let AvgTAT = (TAT / schedlen);

    console.log(`\nProcesses Finished. Total Waiting Time was: ${TW}`)
    console.log(`Avg Wait Time: ${AvgWT}`)
    console.log(`Turnaround time: ${TAT}`)
    console.log(`Avg Turnaround: ${AvgTAT}`)
}
