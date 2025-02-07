const str = "Peter Hernimous Lind"


console.log("Firstname:", str.substring(str[0], str.indexOf(" ")))
console.log("Middle name:", str.substring(str.indexOf(" ")+ 1, str.lastIndexOf(" "))  )
console.log("Lastname:", str.substring(str.lastIndexOf(" ")+ 1, ) )


const name = "Albus Percival Wulfric Brian Dumbledore"


console.log("Firstname:", name.substring(name[0], name.indexOf(" ")))
console.log("Middle name:", name.substring(name.indexOf(" ")+ 1, name.lastIndexOf(" "))  )
console.log("Lastname:", name.substring(name.lastIndexOf(" ")+ 1, ) )
