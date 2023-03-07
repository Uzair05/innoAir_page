const fr_time = new Date();
fr_time.setTime(fr_time.getTime() - 2 * 60 * 1000);

console.log(fr_time.getMinutes().toString().padStart(2, "0"));
