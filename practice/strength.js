/*
Write a function averageStrength(missions) that returns an array of average strength 
values (rounded to 2 decimal places) for each mission.

Sample Input 1:
    {   dragonCave: [ 
            {strength:12}, {strength:18}, {strength:20}     ]
    }

    Expected Output: [16.67]

Sample Input 2:

    {   stormPeak:  [
            {strength:12}, {strength:13}, {strength:14}     ], 
            
        sunkenTemple:[
            {strength:15}, {strength:15}, {strength:15}     ]
    }

    Expected Output: [13.00, 15.00]
*/

function averageStrength(missions) {
    let result = [];

    for (let mission in missions) {
        let totalStrength = 0;
        let count = missions[mission].length;
        
        for (let i = 0; i < count; i++) {
            totalStrength += missions[mission][i].strength;
        }
        
        let aveStrength = totalStrength / count;
        result.push(parseFloat(aveStrength.toFixed(2)))
    }

  return result;
}