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
      }, Math.random() * 1000);
    });
  }



let array = [];
async function travelThroughHistory(n=5)  {
    try {
      const richiesta=[]
      for (let i = 0; i < n; i++) {
        richiesta.push(getPastEvent())

      }
      const result = await Promise.all(richiesta)

      ///console.log(result);

      array=result.sort((a,b) => a.year - b.year).filter((result,i,array) => i === array.findIndex(event => event.name === result.name)).filter(result => result.year< 2000);
      console.log(array);

      return array;


    } catch (error) {
      console.log(error.message);
    }
}
            
travelThroughHistory();            
