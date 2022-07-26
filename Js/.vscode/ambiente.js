let valores = [5,8,7,6,3,4]
valores.sort()
/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)

}
*/
console.log(valores)
for(let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}