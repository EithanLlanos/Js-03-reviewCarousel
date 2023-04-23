let emp1=['pic/employer1.jpg','Martin Smith','WEB DEVELOPER','I\'m baby megging twee helath goth +1. Bycicle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry']
let emp2=['pic/employer2.jpg','Park Johnson','GAME DEVELOPER','Ut pulvinar elit est, quis feugiat leo pellentesque et. Morbi ut ipsum dui. Etiam eu ultricies eros.Ut pulvinar elit est, quis feugiat leo pellentesque et. Morbi ut ipsum dui. Etiam eu ultricies eros.Ut pulvinar.']
let emp3=['pic/employer3.jpg','Carla Paredes','GENERAL DIRECTOR','Duis eget hendrerit elit. Mauris vel libero quis elit fermentum commodo eu ut risus. Phasellus malesuada ex leo, a laoreet mauris malesuada sed. Nunc vitae turpis sodales, semper eros ut, fermentum arcu. Aliqu.']
let emp4=['pic/employer4.jpg','Melisa Gomez','CEO','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et auctor nunc. Ut sed odio dolor. Curabitur ultrices tellus maximus, ullamcorper nulla luctus, pellentesque massa. Quisque turpis leo, tempor in arcu ut, phare.']
let all_emp=[emp1,emp2,emp3,emp4]
let indx=0 

function next(i,i2){
let pic= document.getElementById('pic')
let text1 = document.getElementById('text1')
let text2 = document.getElementById('text2')
let text3 = document.getElementById('text3')
let variable;
if(i==1) indx++
else if(i==0) indx--
if(indx==4) {indx=0};
if(indx==-1) {indx=3};

if(i2!=4){
    indx=i2;    
}
variable=all_emp[indx]
pic.src=variable[0]
text1.innerHTML=variable[1]
text2.innerHTML=variable[2]
text3.innerHTML=variable[3]

}

function rand(){
    
    next(0,Math.floor(Math.random()*4));

}
