/*
const f = (name, cb) => cb(null, `hey ${name} this message was delayed for 5 seconds`);
console.log('this message was not delayed, you ass');
const timer = setTimeout(f, 5000, 'dude', (error, data) => console.log(data));
console.log('timer block of code execution complete except for async delayed fs');
//clearTimeout(timer)

const id = setInterval(() => console.log(new Date()), 5000);
const intervalBreaker = setTimeout(() => clearInterval(id), 16000);

Date.now()
*/


const watch = (filepath, int, cb) => {
    const f = () => fs.stat(filepath, inter);
  
    const inter = (error, data) => {
      if (error) {
        clearInterval(timerId)
        cb(error)
        return
      }
      if (Date.now() - data.mtimeMs < int) {
        cb(null);
        return
      }
    }
  
    const timerId = setInterval(f, int)
    return timerId;
  };
  export default watch;
  
  
  /////teacher's solution
  
  export default (filepath, period, cb) => {
    let lastCheckTime = Date.now();
  
    const check = (timerId) => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          clearInterval(timerId);
          cb(err);
          return;
        }
        if (stats.mtimeMs >= lastCheckTime) {
          cb(null);
        }
        lastCheckTime = Date.now();
      });
    };
  
    const timerId = setInterval(() => check(timerId), period);
    return timerId;
  };