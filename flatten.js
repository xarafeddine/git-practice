function flatten(arr){
    let newArr = [];
    
        for(let item of arr){
            if(Array.isArray(item)){
                newArr = newArr.concat(flatten(item));
            }else{
                newArr.push(item);
            }
            
        }
    
    return newArr;
}

console.log(flatten([3,[4,6,8,[5,7]],[44,7],4]))