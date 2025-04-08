function getPastEvent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const events = [
        { year: 1990, name: "World Wide Web Invented" },
        { year: 2001, name: "Wikipedia Launched" },
        { year: 1969, name: "Moon Landing" },
        { year: 2020, name: "Global Pandemic" },
        { year: 1989, name: "Fall of Berlin Wall" }
      ];

      const randomIndex = Math.floor(Math.random() * events.length);
      resolve(events[randomIndex]);
    }, Math.random() * 0.0001);
  });
}

n = Math.floor(Math.random() * 10000);
console.log(n);

async function travelTroughHistory() {
  let i = 0;
  let arr = [];

  while (i < n) {
    try {
      let res = await getPastEvent();
      arr.push(res);
      i++;
    }
    catch (error) {
      console.log(error);
    }
  }
  console.log("                                                  ");
  console.log("**************** TUTTI GLI EVENTI ****************");
  console.log("**************************************************");
  console.log("                                                  ");
  console.log(arr);

  arr.sort((a, b) => a.year - b.year);
  console.log("                                                  ");
  console.log("************ EVENTI ORDINATI PER ANNO ************");
  console.log("**************************************************");
  console.log("                                                  ");
  console.log(arr);

  arr = filtering(arr);
  
  return arr;
}

function filtering(arr) {
  const filtarr = arr.filter((v,i,o) => o.findIndex(evento => evento.year === v.year) === i).filter(c => c.year <= 2000);

  console.log("                                                  ");
  console.log("************** EVENTI FINO AL 2000! **************");
  console.log("**************************************************");
  console.log("                                                  ");
  console.log(filtarr);

  return filtarr;
}
travelTroughHistory(n);
