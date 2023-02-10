//1.

let a="hey my name siva"
let str=a.split(" ")
let ans=""
for(let i=0;i<str.length;i++){
    for(let j=str[i].length-1;j>=0;j--){
        ans+=str[i].charAt(j);
    }
    ans+=" "
}
console.log(ans)