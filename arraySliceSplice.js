const nums = [1,2,4,5,8,6,9,19,37,18];
console.log(nums);
// slice is 1-4 index value data show
const TestSlice = nums.slice(2,5);
console.log(TestSlice);
// splice is 1-4 index value data removed
//if you splice use then main array data remove you can Selection,
const spliceRemove = nums.splice(6,8);
console.log(spliceRemove);
// array join 
const together = nums.join("");
console.log(together);
const togetherspace= nums.join(" ");
console.log(togetherspace);
const togetherdot= nums.join(".");
console.log(togetherdot);

