//TODO: Given an object containing counts of both upvotes and downvotes, return what vote count should be
//TODO:   displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(obj) {
  const { upvotes, downvotes } = obj;

  return upvotes - downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // ➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); // ➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); // ➞ 0
