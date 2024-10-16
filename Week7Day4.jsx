
Now i want to upload or load student from web api to array which is there in state of the class 

for that the code is so didmount code is updated here 

componentDidUpdate = async (previousProps, previousState) => {
console.log("Component Did Update");
localStorage.setItem("cylcopediaState", JSON.stringify(this.state));
console.log("Old State - " + previousState.studentCount);
console.log("New State - " + this.state.studentCount);
if (previousState.studentCount < this.state.studentCount) {
const response = await getRandomUser();
this.setState((prevState) => {
return {
studentList: [
... prevState.studentList,
{
name: response.data.first_name + " " + response.data.last_name,
},
],
};
});
} else if (previousState.studentCount > this.state.studentCount) {
this.setState((prevState) => {
return {
studentList: [],
};
});
}
};

and after remove students design 

Remove All Students
</button>
this code write after above deign 
------------------------------------
{this.state.studentList.map((student, index) => {
return (
<div className="text-white" key={index}>
- {student.name}
</div>
);
})}







