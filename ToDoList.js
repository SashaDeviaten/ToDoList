function go() {
    var input = document.querySelector('input');
    input.addEventListener('change',setNewGoal);


    function setNewGoal() {
        var div=document.createElement('div');
        document.body.appendChild(div);
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        checkbox.className='checkbox';
        checkbox.addEventListener('click', done);
        div.appendChild(checkbox);
        var text=document.createElement('p');
        text.innerHTML=this.value;
        text.addEventListener('dblclick',improve);
        div.appendChild(text);
        this.value='';
        var X=document.createElement('button');
        X.innerHTML='x';
        X.addEventListener('click', close);
        div.appendChild(X);
    }
    function done() {
        var text=this.nextSibling;
        text.style.textDecoration='line-through';
        this.style.display='none';
        text.removeEventListener('dblclick',improve);

    }
    function close() {
        this.parentNode.remove()

    }
    function improve() {
        var text=this.innerHTML;
        this.innerHTML='<input>';
        var input=this.firstElementChild;
        input.focus();
        input.style.backgroundColor='#EEEEEE';
        input.value=text;
        input.addEventListener('blur',saveNewValue);
        input.addEventListener('keyup',saveNewValue)
    }

    function saveNewValue() {
        if(event.keyCode===13 || event.type==='blur') {
        var text=this.value;
        this.parentNode.innerHTML=text}


    }

}