(async () => {
  const one = await fetch("http://swapi.dev/api/people/3/");
    if (one.ok === true){
      const character1= await one.json();
      console.log(character1);
      document
      .getElementById("one")
      .getElementsByTagName("p")[0]
      .getElementsByTagName("span")[0].innerText = character1.name;
      document
      .getElementsByTagName("p")[1]
      .getElementsByTagName("span")[0].innerText = character1.height;
      document
      .getElementsByTagName("p")[2]
      .getElementsByTagName("span")[0].innerText = character1.mass;
      document
       .getElementsByTagName("p")[3]
      .getElementsByTagName("span")[0].innerText = character1.hair_color;
      document
      .getElementsByTagName("p")[4]
      .getElementsByTagName("span")[0].innerText = character1.birth_year;
      document
      .getElementsByTagName("p")[5]
      .getElementsByTagName("span")[0].innerText = character1.gender;}

      const two = await fetch("http://swapi.dev/api/people/4/");
      if (two.ok === true){
        const character2 = await two.json();
        console.log(character2);
      document
      .getElementById("two")
      .getElementsByTagName("p")[0]
      .getElementsByTagName("span")[0].innerText = character2.name;
      document
      .getElementById("two")
      .getElementsByTagName("p")[1]
      .getElementsByTagName("span")[0].innerText = character2.height;
      document
      .getElementById("two")
      .getElementsByTagName("p")[2]
      .getElementsByTagName("span")[0].innerText = character2.mass;
      document
      .getElementById("two")
       .getElementsByTagName("p")[3]
      .getElementsByTagName("span")[0].innerText = character2.hair_color;
      document
      .getElementById("two")
      .getElementsByTagName("p")[4]
      .getElementsByTagName("span")[0].innerText = character2.birth_year;
      document
      .getElementById("two")
      .getElementsByTagName("p")[5]
      .getElementsByTagName("span")[0].innerText = character2.gender;}

      const three = await fetch("http://swapi.dev/api/people/5/");
      if (three.ok === true){
        const character3 = await three.json();
        console.log(character3);
        document
      .getElementById("three")
      .getElementsByTagName("p")[0]
      .getElementsByTagName("span")[0].innerText = character3.name;
      document
      .getElementById("three")
      .getElementsByTagName("p")[1]
      .getElementsByTagName("span")[0].innerText = character3.height;
      document
      .getElementById("three")
      .getElementsByTagName("p")[2]
      .getElementsByTagName("span")[0].innerText = character3.mass;
      document
      .getElementById("three")
       .getElementsByTagName("p")[3]
      .getElementsByTagName("span")[0].innerText = character3.hair_color;
      document
      .getElementById("three")
      .getElementsByTagName("p")[4]
      .getElementsByTagName("span")[0].innerText = character3.birth_year;
      document
      .getElementById("three")
      .getElementsByTagName("p")[5]
      .getElementsByTagName("span")[0].innerText = character3.gender;}
  
    }) ()