/*
  Pornind de la fetch-ul de mai jos creati o functie "getWordPhonetic" 
  care accepta ca argument un string, acel string e cuvantul care 
  urmeaza sa fie cerut de la server.
  Functia trebuie sa afiseze "Phonetic of <word> is: <phonetic>" daca are phonetic
  sau sa afiseze "this word doesn't have phonetic" in caz contrar

  !!! - inlocuiti <word> cu cuvantul cautat si <phonetic> cu phonetic al acelui cuvant
*/

const root = document.querySelector("#root");
//facem request la server


const getWordPhonetic = (word) => {

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) => {
      //transformam datele in json
      response.json().then((data) => {
        //folosim in mod implicit data cu speranta ca e un obiect trimis de server
        let wordData = data;
        //daca data e un array de obiecte atunci luam primul obiect din array
        if (data.length) {
          wordData = data[0];
        }
        //daca cuvantul contine proprietatea phonetic atunci sa afiseze mesajul
        if (wordData.phonetic) {
          root.innerHTML = `Phonetic of this word is: ${data[0].phonetic}`;
        } else {
          //daca nu sa afiseze mesajul ca nu este asemenea proprietate
          root.innerHTML = ``;
        }
      });
    }
  );

};
console.log(getWordPhonetic("dog"));


    


