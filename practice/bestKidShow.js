/* A streaming platform just released their shows ratings per viewers category.  
Know which one is the best for the kid's category.  Assume that there is no tie for the best.

 {
  "SpongeBob": [
    { "age_group": "Kids", "rating": 8.5 },
    { "age_group": "Teens", "rating": 7 },
    { "age_group": "Adults", "rating": 6.5 }
  ],
  "StrangerThings": [
    { "age_group": "Kids", "rating": 6.0 },
    { "age_group": "Teens", "rating": 9 },
    { "age_group": "Adults", "rating": 8.8 }
  ],
  "BreakingBad": [
    { "age_group": "Teens", "rating": 8.7 },
    { "age_group": "Adults", rating: 9.5 }
  ],
  "PowerPuff": [
    { "age_group": "Kids", "rating": 9.0 },
    { "age_group": "Teens", "rating": 9.2 },
    { "age_group": "Adults", "rating": 8.6 }
  ]
  "AvatarTLA": [
    { "age_group": "Kids", "rating": 8.9 },
    { "age_group": "Teens", "rating": 9.2 },
    { "age_group": "Adults", "rating": 8.6 }
  ]
};

Best kid show is PowerPuff with a rating of 9

Template:
function getTheBest(obj) {     
    // place your code here

    return best;  // best should contain the name of the show and its rating      
}

// DO NOT REMOVE CODE FROM THIS POINT ON
// this function will convert test data into an object and pass it on to getTheBest() function
// this will also print the final output using data received from getTheBest() function
function ans(input){
    obj = JSON.parse(input);
    
    const bestShow = getTheBest(obj);
    // console.log the name of the best show here and its rating

} 

// this will get data from the test cases and do not change anything here
let input ="";
process.stdin.on("data", d => input += d ).on('end', () => ans(input));  // to read input test cases

*/

function getTheBest(obj) {     
    
    let bestShow = null;
    let bestRating = 0;
    
    for (let showName in obj) {
        for (let entry of obj[showName]) {
            if (entry.age_group === "Kids") {
                if (entry.rating > bestRating) {
                    bestRating = entry.rating;
                    bestShow = showName;  
                }
            }
        }
    }
    
    let best = { name: bestShow, rating: bestRating };
    return best;  // best should contain the name of the show and its rating      
}

// DO NOT REMOVE CODE FROM THIS POINT ON
function ans(input){
    obj = JSON.parse(input);
    
    const bestShow = getTheBest(obj);
    
    console.log(`Best kid show is ${bestShow.name} with a rating of ${bestShow.rating}`);
} 

// this will get data from the test cases and do not change anything here
let input ="";
process.stdin.on("data", d => input += d ).on('end', () => ans(input));.stdin.on("data", d => input += d ).on('end', () => ans(input));  // to read input test cases


