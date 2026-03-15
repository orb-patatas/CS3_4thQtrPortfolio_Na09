/* Write a function highestWisdomMission(missions) that returns the mission name (string) with 
the highest average wisdom across all characters in that mission.

{
  dragonCave: [
    { strength:12, agility:8, wisdom:14, stamina:10 },
    { strength:18, agility:11, wisdom:9, stamina:15 }
  ],
  hauntedForest: [
    { strength:10, agility:15, wisdom:16, stamina:9 },
    { strength:17, agility:14, wisdom:10, stamina:12 }
  ]
}

function highestWisdomMission(missions) {
  // Your code here
  let bestMission = null;
  let bestAvg = -Infinity;
  
  return bestMission;  // Must return a STRING (mission name)
}
*/

function highestWisdomMission(missions) {
  let bestMission = null;
  let bestAvg = -Infinity;
  
  for (let missionName in missions) {
      let totalWisdom = 0;
      let count = missions[missionName].length;
      
      for (let character of missions[missionName]) {
          totalWisdom += character.wisdom;
      }
      
      let avgWisdom = totalWisdom / count;
      
      if (avgWisdom > bestAvg) {
          bestAvg = avgWisdom;
          bestMission = missionName;
      }
  }
  
  return bestMission; 
}