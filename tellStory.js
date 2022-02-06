function tellStory(nameMoodActivity) {
  let story = alert(`Hello my name is ${nameMoodActivity[0]}, i am ${nameMoodActivity[1]} today and my activity for today is ${nameMoodActivity[2]}`)
  console.log(nameMoodActivity);
  return story
}

let nameMoodActivity = [];
nameMoodActivity[0] = prompt('Write your name');
nameMoodActivity[1] = prompt('Write your mood for today');
nameMoodActivity[2] = prompt('Write what is your activity for today');

tellStory(nameMoodActivity);