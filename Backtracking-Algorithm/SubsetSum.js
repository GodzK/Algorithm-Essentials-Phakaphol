//recursion เพื่อหาความเป็นไปได้ทั้งหมด

function SubsetSum(nums,target) {
    const result = [];
    function subsetSumRecursion(start,currentSum,combination) {
        if (currentSum === target) {
            result.push([...combination]);
            return;
        }
        if (currentSum > target || start === nums.length) {
            return ;
        }
        combination.push(nums[start]);
        subsetSumRecursion(start + 1 , currentSum + nums[start] , combination) ;
        combination.pop();
        subsetSumRecursion(start + 1 , currentSum , combination) ;
    }
    subsetSumRecursion(0,0,[]);
    return result;
}
const nums =  [1,6,4,3,2,5]
const target = 9
console.log(SubsetSum(nums,target));