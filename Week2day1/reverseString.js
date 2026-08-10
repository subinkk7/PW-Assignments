let str= 'Testleaf'
console.log("String to reverse is:" + str)
let rev=''
let i=str.length - 1;
for(i; i>=0; i=i-1)
{
    rev= rev + str[i];
}
console.log("Reversed string is:" + rev)