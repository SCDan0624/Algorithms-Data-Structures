Sliding Window

    This pattern involves creating a window which can either be an array or number from one position to another.

    Depending on a certain condition, the window either increases or closes (and a new window is created)

    Very useful for keeping track of a subset of data in an array/string ect

Example

    Write a function call maxSubarraySum which accepts an array of integers and a number call n.
    The function should calculate the maximum sum of n consecutive elements in the array.

    maxSubarraySum([1,2,5,2,8,1,5],2) // 10
    maxSubarraySum([1,2,5,2,8,1,5],4) // 17
    maxSubarraySum([4,2,1,6],1) // 6
