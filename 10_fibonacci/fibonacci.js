const fibonacci = function(num) {
   //to calculate the fibonacci sequence of the inputted number, we have
   //f0 = 0 and f1 = 1. from there, we can use a loop to add one with the other
   //everytime until we reach num times

   //1. Create an array for the first to sequences, then concat later sequences.
   let array = [0, 1];
   //2. Create new variable to store the sequence
   let newSequence = 0;

   //if negative, return error
   if (num < 0){
    return "OOPS";
   }
    //we'll add 0 and 1 to get f2, which is 1. and from there we keep on adding until
    //we reach fnum
    if (num >= 2){
        for (let i = 2; i <= num; i++){
            newSequence = (array[i - 1]) + (array[i - 2]);
            array.push(newSequence);
        }
        return newSequence;
    }
    else{
        return array[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
