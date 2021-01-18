// solutions for free-response questions from: 
// http://compscimadison.weebly.com/uploads/5/8/7/4/58741529/ap-computer-science-a-2014-practice-exam.pdf

const recombine = (word1, word2) => {
  return word1.slice(0, word1.length / 2) + word2.slice(word2.length / 2);
};

const mixedWords = (words) => {
  const result = [];
  
  for (let i = 1; i <= words.length; i += 2) {
    result.push(recombine(words[i - 1], words[i]));
    result.push(recombine(words[i], words[i - 1]));
  }

  return result;
};

const getPeakIndex = (mountainProps) => {
  const isPeak = (current, index, array) => {
    const prev = array[index - 1];
    const next = array[index + 1];
    return prev < current && current > next;
  };

  return mountainProps.findIndex(isPeak);
};

const isMountain = (arr) => {
  const peakIndex = getPeakIndex(arr);

  const mountainSlopesAreValid = (value, index, array) => {
    if (index === peakIndex) {
      return true;
    } else if (index < peakIndex) {
      return value < array[index + 1];
    } else if (index > peakIndex) {
      return value < array[index - 1];
    }
  }

  return (peakIndex !== -1) && arr.every(mountainSlopesAreValid);
};

const temps = [
  [95.5, 100.0, 100.0, 100.0, 100.0, 110.3],
  [0.0, 50.0, 50.0, 50.0, 50.0, 0.0],
  [0.0, 40.0, 40.0, 40.0, 40.0, 0.0],
  [0.0, 20.0, 20.0, 20.0, 20.0, 0.0],
  [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
];

const computeTemp = (row, col) => {
  if (row === 0 || col === 0 || row === temps.length - 1 || col === temps[0].length - 1) {
    return temps[row][col].toFixed(1);
  }

  const above = temps[row - 1][col];
  const below = temps[row + 1][col];
  const left = temps[row][col - 1];
  const right = temps[row][col + 1];

  return ((above + below + left + right) / 4).toFixed(1);
};

const updateAllTemps = (tolerance) => {
  let isWithinTolerance = true;

  const newTemps = temps
    .map((row, rowIdx) => row
      .map((cell, cellIdx) => computeTemp(rowIdx, cellIdx)));
  
  newTemps
    .forEach((row, rowIdx) => row
      .forEach((cell, cellIdx) => {
        if (isWithinTolerance && Math.abs(cell - temps[rowIdx][cellIdx]) <= tolerance) {
          isWithinTolerance = false;
        }

        temps[rowIdx][cellIdx] = cell;
      }));


  return isWithinTolerance;
};

// ----

class ScoreInfo {
  constructor(score) {
    this.score = score;
    this.numOfStudents = 1;
  }

  increment() {
    this.numOfStudents++;
  }

  getScore() {
    return this.score;
  }

  getFrequency() {
    return this.numOfStudents;
  }
}

class Stats {
  constructor() {
    this.scoreList = [];
  }

  record(score) {
    const foundScore = this.scoreList.find((scInfo) => scInfo.getScore() === score);

    if (foundScore) {
      foundScore.increment();
      return false;
    } else {
      const newScore = new ScoreInfo(score);
      this.scoreList.push(newScore);
      this.scoreList.sort((scInfo1, scInfo2) => scInfo1.getScore() - scInfo2.getScore());
      return true;
    }
  }

  recordScores(newScores) {
    for (const value of newScores) this.record(value);
  }
}
