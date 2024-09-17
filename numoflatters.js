let message = "qw wer ";

let count = 0;
for (let i = 0; i < message.length; i++) {
  if (message[i].match(/[a-zA-Z]/)) count++;
}

console.log(count);
