// validation
function input_1(){
        var input = document.getElementById('contactName');
        if(input.value == 0 || input.value ==null){
                document.getElementById("name_error").innerHTML ="please fill up your name.."
                input.focus();
                return true;
        }else{
            document.getElementById("name_error").innerHTML =` <span class='xin'><i class='bx bx-universal-access ' ></i></span> `
            return false;
        }
}

// API
document.getElementById('posh').addEventListener('click', gel)
var particles=document.getElementById('particles-js')
var container=document.getElementById('container')

function gel(){
    if(input_1()==false){
        particles.style.display='none'
        container.style.display='block'
             display()
    }else{

    }
   
}

var myHttp = new XMLHttpRequest();
var ailName=[];
myHttp.open('GET','https://newsapi.org/v2/everything?q=tesla&from=2022-12-02&sortBy=publishedAt&apiKey=afc0c5c08cf145919a58d7c6130f7914');
myHttp.send();


myHttp.addEventListener('readystatechange', function(){
    if(myHttp.readyState == 4 ){
        ailName = JSON.parse(myHttp.response).articles;
        // console.log(ailName);
        // display()
    }
})

function display(){
    var cartona =``;
    for (var i =0 ; i<ailName.length; i++){
        if(ailName[i].description !==null){
                   cartona +=`
        <div class="col-md-4">
        <div class="item">
            <img class="w-100 h-100 " src="${ailName[i].urlToImage}" alt="">
            <div class="caption p-3">
                <h4> ${ailName[i].title.split(' ').splice(0.5).join(' ')}</h4>
                <p> ${ailName[i].description.split(' ').splice(0.5).join(' ')}</p>
                <a class="btn btn-outline-info  w-100" href=" ${ailName[i].url}">show</a>
            </div>
        </div>
    </div>
        `
        }
    }
    document.getElementById('rowData').innerHTML =cartona;
}
