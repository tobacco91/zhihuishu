let arr = [].slice.call(document.querySelectorAll('.isStudiedLesson'))
let count = 0;
arr.forEach((element,i) => {
    let timeInner = element.nextElementSibling.nextElementSibling.innerText;
    let timeArr = timeInner.split(':');
    let time = parseInt(timeArr.pop()) * 1000 + parseInt(timeArr.pop())*60*1000 + 3000;
    setTimeout(() => {
        arr[i].click();
        //1.5倍加速
        document.querySelector('.speedTab15').click();
    }, count);
    count += time;
});
