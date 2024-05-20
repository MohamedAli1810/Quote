var qut=[
    {
        author: "― Oscar Wilde",
        quotes: "“Be yourself; everyone else is already taken.”"
    },
    {
        author: "― Albert Einstein",
        quotes: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        author: "― Marcus Tullius Cicero",
        quotes: "“A room without books is like a body without a soul.”"
    },
    {
        author: "― Mahatma Gandhi",
        quotes: "“Be the change that you wish to see in the world.”"
    },
]
var index = Math.floor(Math.random()*qut.length);
var index2;
var count=1;
function quote(){
    index2=index;
    if( count==1 ){
        document.querySelector('#elementid').innerHTML=qut[index].quotes;
        document.querySelector('#elementtid').innerHTML=qut[index].author;
        count--;
    }else if(count!==1){
    do{
        index=Math.floor(Math.random()*qut.length);
    }while(index2==index);
        document.querySelector('#elementid').innerHTML=qut[index].quotes;
        document.querySelector('#elementtid').innerHTML=qut[index].author;
        //console.log("index --> "+index);
       //console.log("index2 --> "+index2);
        console.log(index);
    }
}