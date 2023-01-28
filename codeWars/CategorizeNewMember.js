// function openOrSenior(data = []){
//     let member = []
//     for(let i = 0 ; i < data.length;i++){
//         data[i][0] >= 55 && data[i][1] > 7?member.push("Senior"):member.push("Open")
//     }
//     return member
// }

// console.log( openOrSenior([(18, 20), (45, 2),(61, 12), (37, 6), (21, 21), (78, 9)]));  //output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// console.log( openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])); 


// Testing for members = [[55,8],[37,18],[78,25],[23,23],[32,1]]: expected [ 'Open', 'Open', 'Senior', 'Open', 'Open' ] to deeply equal [ 'Senior', 'Open', 'Senior', 'Open', 'Open' ]



function openOrSenior(data){
    return data.map((d)=>
        {return d[0]>54&&d[1]>7?'Senior':'Open'})
}

console.log( openOrSenior([(18, 20), (45, 2),(61, 12), (37, 6), (21, 21), (78, 9)])); 