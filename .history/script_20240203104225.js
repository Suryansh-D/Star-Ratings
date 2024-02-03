const btn = document.querySelector('button');
const post = document.querySelector('.post');
const widget = document.querySelector('.stars'); 
const editBtn = document.querySelector('.edit');

btn.onclick =() => {
    widget.style.display = 'none';
    post.style.display = 'block';
   

    editBtn.onclick =() => {
        widget.style.display = 'bolck';
        post.style.display = 'none';
        
    }
    return false;
}
