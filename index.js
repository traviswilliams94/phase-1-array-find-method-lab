// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ];



function superbowlWin(record){
    for (let i=0; i < record.length; i++){
    if (record[i].result === "W"){
        return record[i].year;
    }}
};

record.find(superbowlWin);