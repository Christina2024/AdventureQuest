const prompt = require("prompt-sync")();

const answer = prompt("Would you like to play a game (y/n)? ");
if (answer.toLowerCase() === "y") {
  const answer2 = prompt("Would you like to go left or right (left/right)? ");

  // Check for 1 answer, if not check for another.

  if (answer2 === "left") {
    console.log("Oops! You go left and fall off a bridge. You loose!");
  } else {
    console.log(
      "Great! You go right, and approach a bridge. You are onr step closer to achieving victory oh warrior!",
    );

    // Next stage.
    const answer3 = prompt(
      "Would you like to cross the bridge or turn around and find anouther route (cross/turn)? ",
    );
    if (answer3 === "cross") {
      console.log("You cross the bridge and come across "); //...and reach the end of the game!
    } else {
      console.log(
        "You turn back and trip on a log and hurt your leg. You lose."
      );
    }
      // Finale
      
    const answer4 = prompt(
      "Would you like to cross the bridge or turn around and find anouther route (cross/turn)? "
    );
    if (answer4 === "cross") {
      console.log("You cross the bridge and reach the end of the game!");
    } else {
      console.log(
        "You turn back and trip on a log and hurt your leg. You lose."
      );
    }
  }
} else {
  console.log("Oh no! That's a shame.");
}
