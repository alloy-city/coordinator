import { courseList } from './ui'

let searchElement = document.getElementById("coordinator-course-search")

export default (search) => {
    if (!search) search = searchElement.value

    let path = `course/`
    
    if(search.length > 0){
        path = `course/search/${search}`
    }

    Auth.database("GET", null, path, response => {
        console.log(response)
        courseList(response)
    })
}