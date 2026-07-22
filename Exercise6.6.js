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
student.sort((a,b) => b.cgpa - a.cgpa);
console.log(student);

