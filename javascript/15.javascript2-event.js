//Ex9 : 마우스 이벤트 객체 : 박스의 옵셋 영역 좌표 이용하기
window.addEventListener("load", function(){

    var section = document.querySelector("#section9");
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;
    var left = container.offsetLeft;
    var top = container.offsetTop;

    console.log(left+","+top)

    // container 대신 document를 사용하면 container를 벗어났다가 다시 들어와도 box를 잡고 있지 않게 된다.
    document.onmousedown = function(e) {
    //container.onmousedown = function(e) {
        if(e.target.classList.contains("box")) {
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };
    document.onmousemove = function(e) {
    //container.onmousemove = function(e) {
        if(!dragging)   return;

        // 이렇게 사용하면 box가 움직이면서 깜빡이는 현상 발생한다.
        // 이유는 두번에 걸쳐 좌표값을 갱신하기 때문이다.
        //var x = e.offsetX-offset.x-left;
        //var y = e.offsetY-offset.y-top;

        var x = e.pageX-offset.x-left;
        var y = e.pageY-offset.y-top;

        current.style.left = x+"px";
        current.style.top = y+"px";

        status.innerHTML = "(x,y):("+x+","+y+")";
    };
    document.onmouseup = function(e) {
    //container.onmouseup = function(e) {
        dragging = false;
    };
});

//Ex7 : 마우스 이벤트 객체 : 드래그 방식으로 박스 옮기기
window.addEventListener("load", function(){

    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};

    container.onmousedown = function(e) {
        if(e.target === box)
            dragging = true;
    };
    container.onmousemove = function(e) {
        if(!dragging)   return;

        box.style.left = e.pageX-offset.x+"px";
        box.style.top = e.pageY-offset.y+"px";
    };
    container.onmouseup = function(e) {
        dragging = false;
    };
    box.onmousedown = function(e) {
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }
});

//Ex6-마우스 이벤트 객체 : 마우스 좌표
window.addEventListener("load", function(){

    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    container.onclick = function(e) {
        //e.x, e.y, e.offsetX, e.offsetY, ...
        console.log("(x,y):"+e.x+", "+e.y);
        console.log("client (x,y):"+e.clientX+", "+e.clientY);
        console.log("page (x,y):"+e.pageX+", "+e.pageY);
        console.log("offset (x,y):"+e.offsetX+", "+e.offsetY);
        box.style.position = "absolute";   // default = static
        box.style.left = e.x+"px";
        box.style.top = e.y+"px";
    };

});

//Ex5-트리거
window.addEventListener("load", function(){

    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function() {
        //alert("test");
        var event = new MouseEvent("click", {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        fileButton.dispatchEvent(event);
    }
});

//Ex4-여러 버튼을 가진 화면에서 이벤트를 처리하는 방법
window.addEventListener("load", function(){

    var section = document.querySelector("#section4");
    var tbody = section.querySelector(".notice-list tbody"); 
    
    tbody.onclick = function(e){
        // 기본 행위를 막을려고 한다.
        // 없으면 다음 페이지가 호출되어 아래에서 백그라운드 색상이 변경되지 않는다.
        e.preventDefault();

        var target = e.target;
        if(target.nodeName != "A")  
            return;

        if(target.classList.contains("sel-button")) {
            var tr = target.parentElement;
            for(; tr.nodeName != "TR"; tr=tr.parentElement) ;

            tr.style.background = "yellow";
        }
        else if(target.classList.contains("edit-button")) {

        }
        else if(target.classList.contains("del-button")) {

        }
    };
});

// Ex3-이벤트 버블링 멈추기
window.addEventListener("load", function(){

    var section = document.querySelector("#section3");
    
    var imgList = section.querySelector(".img-list"); 
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        console.log("imgList.onclick");
        if(e.target.nodeName != "IMG")  return;
        currentImg.src = e.target.src;
    };

    addButton.onclick = function(e){
        e.stopPropagation();    // 버블링이 위쪽으로 전파되는 것을 막는다.

        console.log("addButton.onclick");
        var img = document.createElement("img");
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    };

}); 

//Ex2-이벤트 버블링을 이용해 사용자 이벤트 처리하기:event Bubbling
window.addEventListener("load", function(){

    var section = document.querySelector("#section2");
    var imgList = section.querySelector(".img-list"); 
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        //console.log("test");
        //console.log(e.target.nodeName);
        if(e.target.nodeName != "IMG")  return;

        currentImg.src = e.target.src;
    };
}); 


//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");
    var delButtons = section.querySelectorAll(".del-button");

    // 이런식의 코딩은 비효율적이다. function이 반복적으로 만들어진다.
    // 또한 버턴의 수 만큼 반복문이 돌면서 이벤트를 할당하는 것도 비효율적이다.
    for(var i=0; i<delButtons.length; i++) {
        delButtons[i].onclick = function(e) {
            var tr = e.target.parentElement.parentElement;
            tr.remove();
        }
    }
}); 

//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){

    var section = document.querySelector("#section1");
    
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    
    // imgs[0].onclick = function(e) {
    //     //console.log(e.target.nodeName);
    //     currentImg.src = e.target.src;
    // };

    // imgs[1].onclick = function(e) {
    //     //console.log(e.target.nodeName);
    //     currentImg.src = e.target.src;
    // };

    // imgs[2].onclick = function(e) {
    //     //console.log(e.target.nodeName);
    //     currentImg.src = e.target.src;
    // };

    // 아래처럼 코딩하는 것은 잘못된 방법이다.
    // 추후 수정해야 한다.
    for(var i=0; i<imgs.length; i++)
        imgs[i].onclick = function(e) {
            currentImg.src = e.target.src;
        };
});