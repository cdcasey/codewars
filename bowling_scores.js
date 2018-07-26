function bowlingScore(frames) {
    // Figure out the score!
    let framesArray = frames.split(' ');
    console.log(framesArray);
}

// maybe this bowler should put bumpers on
console.log(bowlingScore('11 11 11 11 11 11 11 11 11 11'), 20);
// woah! Perfect game!
console.log(bowlingScore('X X X X X X X X X XXX'), 300);