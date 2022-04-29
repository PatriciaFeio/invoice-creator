const btnTask = document.querySelectorAll(".btn-task")
const formNote = document.getElementById("form-note-p")
const formTotalAmount = document.getElementById("total-amount")
const formTask = document.getElementById("form-task-wrapper")
const formTotal = document.getElementById("form-total-wrapper")
// create ul elements
const taskList = document.createElement("ul")
const totalValueList = document.createElement("ul")
// add class to ul elements
taskList.classList.add("form-task-list")
totalValueList.classList.add("form-total-list")

const tasksArr = []
let totalAmount = 0


btnTask.forEach((element, i) => {

    element.addEventListener('click', (e => {

        //create li elements
        const taskListItem = document.createElement("li")
        const totalListItem = document.createElement("li")
        // create btn remove button
        const btnRemove = document.createElement("button")
        // add a class to btnRemove
        btnRemove.classList.add("btn-remove")
        // add content to btnRemove
        btnRemove.innerHTML = "Remove"

        const task = btnTask[i].innerHTML
        const taskName = task.split(":")[0]
        const taskPrice = task.split("$")[1]
        const taskPriceNumber = parseInt(taskPrice, 10)

        taskListItem.innerHTML = `${taskName}`
        taskList.append(taskListItem)
        formTask.append(taskList)

        totalListItem.innerHTML = `$${taskPriceNumber}`
        totalValueList.append(totalListItem)
        formTotal.append(totalValueList)

        taskListItem.append(btnRemove)

        tasksArr.push(task)

        totalAmount = totalAmount + taskPriceNumber
        formTotalAmount.innerHTML = `$${totalAmount}`

        btnTask[i].disabled = true
        formNote.innerHTML = "We accept cash, credit card, or Paypal"

        btnRemove.addEventListener('click', () => {
            taskListItem.remove()
            totalListItem.remove()

            btnTask[i].disabled = false

            totalAmount = totalAmount - taskPriceNumber

            formTotalAmount.innerHTML = `$${totalAmount}`

            if(totalAmount === 0) {
                formNote.innerHTML = ""
            }
        })
    }))
})
