function searchInsert(nums: number[], target: number): number {
    for (var i = 0,len = nums.length; i < len; i++) {
        if (nums[i] >= target ) {
            return i;
        }
    }
    
    return len;
}
