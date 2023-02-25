
const spinners = ['|', '/', '-', '\\', '|'];
for(let i = 0; i < spinners.length; i++){
  setTimeout(() => {
    process.stdout.write(`\r ${spinners[i]}`); 

  }, i * 200)
}