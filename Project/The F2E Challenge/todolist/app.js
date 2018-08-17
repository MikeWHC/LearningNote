let $tab = $('.tab'),
    filterStore = function(type){
        return store.filter((task) => task.status === type);
    }
$tab.on('click', function(){
    let isFocus = $(this).hasClass('focus'),
        type = $(this).data('type');
    if (!isFocus) {
        let tasks = type === 'all' ? store : filterStore(type);

        $(this).addClass('focus').siblings().removeClass('focus');
        render(tasks);
    }
})
// $('.datepicker').datepicker();


let store = [],
    $tasks = $('#tasks .col'),
    render = function(tasks){
        let html = tasks.reduce(function(accumulator, task){
            accumulator += taskHtml(task);
            return accumulator;
        }, '')
        $tasks.empty().append(html);
        console.log('render')
    },
    emptyInput = function(){

    },
    taskHtml = function(task){
    let {name, status, ontop, deadline, file, comment} = task,
        html = `<div class="row task ${ontop ? 'ontop' : ''}">
<div class="col">
    <div class="row justify-content-between no-gutters">
        <div class="col-sm-1 center">
            <input type="checkbox" name="" id="" class=" form-control" ${status === 'complete' ? 'checked' : ''}>
        </div>
        <div class="col-sm-9 center">
            ${name}
        </div>
        <div class="col-sm-1 center">
            <i class="fas fa-star ${ontop ? 'ontop' : ''}"></i>
        </div>
        <div class="col-sm-1 center">
            <i class="fas fa-pen"></i>
        </div>
    </div>
    <div class="row justify-content-start">
        <div class="col-sm-1">
            <i class="far fa-calendar-alt"></i>
            <span>${deadline}</span>
        </div>
        <div class="col-sm-1">
            <i class="far fa-file"></i>
        </div>
        <div class="col-sm-1">
            <i class="far fa-comment-dots"></i>
        </div>
    </div>
</div>
</div>`
return html
}
let $addBtn = $('.add'),
    $addTask = $('#addTask');

class Task{
    constructor(name, deadline, file, comment){
        this.name = name;
        this.deadline = deadline;
        this.file = file;
        this.comment = comment;
        this.status = 'progress';
        this.ontop = false;
    }
    moveTop(){
        this.ontop = true;
    }
    complete(){
        this.status = 'complete';
    }
}
let getTaskData = function(){
    let task,    
        name = $addTask.find(':text').val(),
        deadline = $addTask.find('input[type="date"]').val(),
        comment = $addTask.find('textarea').val();
    
    task = new Task(name, deadline, '', comment);
    return task
}
$addBtn.on('click', function(){
    let task = getTaskData();
    store.push(task);
    render(store);
})
$tasks.on('click', ':checkbox', function(){
    let index = $(this).index(),
        isCheck = $(this).prop('checked');
    store[index].complete();
    render(store);
})
// task = {
//     name: 'read a book',
//     status: 'progress',
//     ontop: 'true',
//     deadline: '2018/09/01',
//     file: '',
//     comment: ''
// }