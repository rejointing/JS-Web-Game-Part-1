function newImage(addyy, l, b){
    let icon= document.createElement('img')
icon.src = addyy
icon.style.position = 'fixed'
icon.style.left = l +'px'
icon.style.bottom = b + 'px'
document.body.append(icon)
return icon
}
function newItem(addyy, l, b){
    let icon = newImage(addyy, l, b)

    icon.addEventListener('dblclick', () => {
        icon.remove()
    })
}

newImage('assets/green-Character/south.gif', 100, 100)
newImage('assets/pine-tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',450,200)
newImage('assets/well.png',500,425)
newItem('assets/sword.png',500,405)
newItem('assets/sheild.png',650,100)
newItem('assets/staff.png',600,100)
icon.remove(sword)

//let sword =document.createElement('img')
//sword.src = 'assets/sword.png'
//sword.position ='fixed'
//sword.left='500px'
//sword.bottom ='405px'
//document.body.append(sword)

//sword.addEventListener('click', function(){
    //sword.remove() 



//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
//greenCharacter.style.bottom = '100px'
//document.body.append(greenCharacter)

//let pineTree = document.createElement('img')
//pineTree.src = 'assets/pine-tree.png'
//pineTree.style.position = 'fixed'
//pineTree.style.left = '450px'
//pineTree.style.bottom = '200px'
//document.body.append(pineTree)