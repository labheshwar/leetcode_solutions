/* Initial Approach */

// class KthLargest {
//     constructor(k, nums) {
//          this.k = k;
//          this.nums = nums.sort((a, b) => b - a).slice(0, k);
//      }
 
//      add(val) {
//          if (this.nums.length < this.k || val > this.nums[this.nums.length - 1]) {
//              this.nums.push(val);
//              this.nums.sort((a, b) => b - a);
//              if (this.nums.length > this.k) {
//                  this.nums.pop();
//              }
//          }
//          return this.nums[this.k - 1];
//      }
//  } 


/* Later approach */

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.nums = nums.sort((a, b) => b - a).slice(0, k);
    }

    add(val) {
        this.binaryInsert(val);
        if (this.nums.length > this.k) {
            this.nums.pop();
        }
        return this.nums[this.k - 1];
    }

    binaryInsert(val) {
        let left = 0;
        let right = this.nums.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.nums[mid] > val) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        this.nums.splice(left, 0, val);
    }
}
