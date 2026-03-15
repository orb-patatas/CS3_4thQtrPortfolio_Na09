function highestWisdomMission(missions) {

    let bestMission = null;
    let bestAvg = -Infinity;

    for (let mission in missions) {
        let totalStrength = 0;
        let count = missions[mission].length;

        for (let char of missions[mission]) {
            totalStrength += char.strength;
        }

        let aveStrength = totalStrength / count;

        if (aveStrength > bestAvg) {
            bestAvg = aveStrength;
            bestMission = mission;
        }
    }
  
    return bestMission;  // Must return a STRING (mission name)
}