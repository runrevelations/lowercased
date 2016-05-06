var array = ['hEllo', '40', 10, 'CoRN COBBBBBB'];

var sentence = 'I wIlL Be AlL LOWERCAsE.';

var someObject = {
    nAme: 'Carl',
    siZe: 'Jr.',
    ShaPe: 'Star'
};

var numbers = 4356253;


function lowerCased(arr) {
    
    var newArr = [];
    
    if (Array.isArray(arr)){
    
        for(var i = 0; i < arr.length; i++) {
        
            if (isNaN(arr[i])){ 
                var item = arr[i];
                newArr.push(item.toLowerCase());
                arr.splice(i, i + 1)
                var final = newArr.concat(arr)
                
            };   
            
        };
        
        console.log(final);
        return final;
        
    } else if (typeof(arr) === 'string') {
        
        console.log(arr.toLowerCase());
        return arr.toLowerCase();
    
    } else {
    
        console.log('Data type cannot be converted to lower case.');
    
    };

};

lowerCased(array); // should return array where all items are lowercase

lowerCased(sentence); // should return a string all lowercase

lowerCased(someObject); // should reject conversion

lowerCased(numbers);  // should reject conversion
