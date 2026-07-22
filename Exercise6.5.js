const student = [
    {
   name : 'rohim', cgpa: 3.40 
},
{
    name : 'ferdus', cgpa: 3.72

},
{
    name : 'ahmed', cgpa: 3.89

},
{
    name : 'jahed', cgpa: 3.30

}
];

const result = student.filter((p) => p.cgpa >= 3.5)
.map((p)=>p.name);

console.log(result);