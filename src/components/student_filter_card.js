
import femaleHeadshot1 from "../assests/femaleHeadshot.png";
import maleHeadshot1 from "../assests/maleHeadshot.png";
import femaleHeadshot2 from "../assests/femaleHeadshot2.png";
import maleHeadshot2 from "../assests/maleHeadshot2.png";
import maleHeadshot3 from "../assests/maleHeadshot3.png";



const users = [
    {
      id: 1,
      name: "Raman",
      img: maleHeadshot1,
      age: 95,
      sem: 2,
      college: "Marwari College Bhagalpur",
      email: "raman123@gmail.com",
    },
    {
      id: 2,
      name: "Sita",
      img: femaleHeadshot1,
      age: 85,
      sem: 1,
      college: "Marwari College Bhagalpur",
      email: "sita123@gmail.com",
    },
    {
      id: 3,
      name: "John",
      img: maleHeadshot2, 
      age: 30,
      sem: 3,
      college: "ABC College",
      email: "john12Doe@gmail.com",
    },
    {
      id: 4,
      name: "Emily",
      img: femaleHeadshot2, 
      age: 25,
      sem: 2,
      college: "XYZ University",
      email: "emily3@gmail.com",
    },
    {
      id: 5,
      name: "David",
      img: maleHeadshot3,
      age: 40,
      sem: 4,
      college: "PQR Institute",
      email: "david9@gmail.com",
    },
  ];


const generateMoreUsers =()=>{
    const  names = ["Rahul", "Priya", "Ajay", "Riya", "Alex", "Olivia", "William", "Sophia"];
    const colleges= ["NIT Patna", "IIT Patna", "MIT Bangalore", "Stanford University"];
    let images = [maleHeadshot1,maleHeadshot2,maleHeadshot3,femaleHeadshot1,femaleHeadshot2];

    return {
        id : users.length +1,
        img: images[Math.floor(Math.random() * images.length)],
        name : names[Math.floor(Math.random() * names.length)],
        age: Math.floor(Math.random() *(35-18))+18,
        sem: Math.floor(Math.random() * 6 )+1,
        college :  colleges[Math.floor(Math.random()* colleges.length)],
        email : `${names[Math.floor(Math.random()*names.length)].toLowerCase()}${Math.random().toString(36).substring(2,5)}@gmail.com`,

    };

}

while(users.length < 50){
    users.push(generateMoreUsers());
}
// console.log(users)
export default users;