
const username = process.argv[2];

const execute = (script) => new Promise((resolve, reject) => {
  require('child_process').exec(script, (error, stdout) => {
    if (error) reject(error);
    else resolve();
  });
});

var progress = (total) => {
  var count = 0; 
  return (name) => {
    count++;
    console.log('' + count + ' of ' + total + ' completed! ' + name + ' is downloaded');
    if (count === total) console.log('Github Clone of ' + username + '\'s Repositories Completed Successfully!');
  };
};

require('rl-stdin')
.then((data) => JSON.parse(data))
.then((data) => {
  if (!data.length) return Promise.reject('Some issue fetching the repos.\nDATA: ' + JSON.stringify(data));
  progress = progress(data.length);
  return data;
})
.then((data) => {
  data.forEach((repo) => {
    execute('cd Repositories/' + username + ' && git clone ' + repo.clone_url)
    .then(() => progress(repo.name));
  });
})
.catch((error) => console.log(error));
