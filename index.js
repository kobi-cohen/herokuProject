let headline=document.getElementById('headline');
let btn=document.getElementById('btn');

let collector='';
foo1=(cb)=>{
    setTimeout(()=>{
    collector='Welcome to';
    headline.append(collector);
    cb(foo3);
},1000);
   
};

foo2=(cb)=>{
    setTimeout(()=>{ 
        collector=' my new Heroku'; 
    headline.append(collector);
    cb();
},1000)
   
}
foo3=()=>{
    setTimeout(()=>{ 
        collector=' Project :) '; 
        headline.append(collector);
    },1000)
   
}



foo1(foo2);

setTimeout(()=>{
    headline.style=`display:none;`
    btn.style=`display:block;`
    btn.addEventListener("click",()=>{
        headline.textContent='';
        headline.style=`display:block;`
        btn.style=`display:none;`
        foo1(foo2);});
}
,6000);


