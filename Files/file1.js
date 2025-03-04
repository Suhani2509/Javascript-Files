import{name,age ,greeting}from "../Files/file2.js" 
console.log(name)
greeting()
import{obj as object} from "../Files/file3.js"
console.log(object)

import{arr} from "../Files/file3.js"
console.log(arr)

// instead of writing import again and again we can also 
import * as user from "../Files/file2.js"
console.log(user.name)