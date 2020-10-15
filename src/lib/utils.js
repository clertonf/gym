module.exports = {
  age(timeStamp){
      const today = new Date(); //dia
      const birthDate = new Date(timeStamp);
      
      //let pois eu tenho que mexer nessa data
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
    
      if(month < 0 || month == 0 && today.getDate() <= birthDate.getDate()){
        age = age - 1;
    }
       return age;

      //day 1 - 31
      // today.getDate();
      // birthDate.getDate()  
 
    },
    date(timeStamp){
       const date = new Date(timeStamp);

      //yyyy ano
       const year = date.getUTCFullYear();
      //mm mes
       const month = `0${date.getUTCMonth() + 1}`.slice(-2); // 0 a 11 + 1 = 12
      // dd dia
       const day = `0${date.getUTCDate()}`.slice(-2); // 1 até o 31
       
       
       return {
         day,
         month,
         year,
         iso: `${year}-${month}-${day}`,
         birthDay: `${day}/${month}`,
         format: `${day}/${month}/${year}`
       } //iso

    }

  }


