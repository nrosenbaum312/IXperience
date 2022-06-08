class Task {
    constructor(newTask){
        this.newTask = newTask;
    }

    static fromJSON(json) {
        return new Task(
            json.newTask
        );
    }
}

class UI{
    constructor(){
        this.form = document.getElementById("form");
        this.input = document.getElementById("input");
        this.button = document.getElementById("add-btn");
        console.log(this.input.value)

        this.tableBody = document.getElementById("table-body");

        this.tasks = [];
        this.form.addEventListener('submit', (e)=> this.onFormSubmit(e));
        
        this.loadFromLocalStorage();
        this.renderTable();
        

    }

    onFormSubmit(e){
        e.preventDefault();

        const task = new Task(this.input.value); 

        this.tasks.push(task);

        this.renderTable();

        console.log("submitted" + task.newTask);

        this.input.value = "";

        this.saveToLocalStorage();
    }

    renderTable() {
        this.tableBody.innerHTML = [];

        for(let i =0; i<this.tasks.length; i++){
            const task = this.tasks[i];

            const tr = document.createElement("tr");

            const tdTask = document.createElement("td");
            const tdCheckBox = document.createElement("td");
            const tdDelete = document.createElement("td");

            const checkBox = this.createCheckBox();
            tdCheckBox.appendChild(checkBox);

            const removeBtn = this.createRemoveButton(task);
            tdDelete.appendChild(removeBtn);

            tdTask.innerHTML = task.newTask;

            tr.appendChild(tdTask);
            tr.appendChild(tdCheckBox);
            tr.appendChild(tdDelete);

            this.tableBody.appendChild(tr);

        }
    }

    createCheckBox(){
        const div = document.createElement("div");
        div.setAttribute("class", "form-check");

        const checkbx  = document.createElement("input");
        checkbx.setAttribute("class", "form-check-input");
        checkbx.setAttribute("type", "checkbox");
        checkbx.setAttribute("id", "flexCheckDefault");

        div.appendChild(checkbx);
        
        console.log("working")

        return div;

    }

    createRemoveButton(task){
        const button = document.createElement('button');

        button.setAttribute("class", "btn btn-danger btn-sm");
        button.innerHTML ="X";

        button.addEventListener("click", () => this.onRemoveTaskClicked(task));

        return button;

    }

    onRemoveTaskClicked(task){
        this.tasks = this.tasks.filter((x) => {
            return task.newTask !== x.newTask;
        });

        this.renderTable();
        this.saveToLocalStorage();
    }

    saveToLocalStorage(){
        const json = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", json);

        console.log("Is working");
    }

    loadFromLocalStorage(){
        const json = localStorage.getItem("tasks");
        if(json){
            const taskArr = JSON.parse(json);
            this.tasks = taskArr.map(x => Task.fromJSON(x));
        }
    }
}

const ui = new UI();
