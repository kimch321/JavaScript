class Experiment {
    _publicField = 2;
    #privateField = 0;
}
const experimaent = new Experiment();
console.log(experimaent._publicField);
console.log(experimaent.privateField);