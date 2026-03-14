/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
     const n = arr.length;
    const distinct=[];
    for(let i=0;i<n;i++)
    {
        const curr=arr[i];
        let isDistinct = true;
        for(let j=0;j<n;j++)
        {
            if(j==i)continue;
            if(arr[j]==curr)
            {
                isDistinct= false;
                break;
            }
        }
        if(isDistinct)
        {
            distinct.push(curr);
        }
    }
    if(distinct.length<k)
    {
        return "";
    }
    return distinct[k-1];
};