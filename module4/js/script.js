var names = ["Matteo", "Kobe", "Ale", "Tom", "Andy", "Aldo"];

for (var name in names) {
  var firstLetter = names[name].charAt().toLowerCase();

  if (firstLetter == 'a') {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}
