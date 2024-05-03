window.addEventListener('load', function() {
    this.document.querySelector('#Name_divider').classList.add('loaded');
    this.document.querySelector('#des').classList.add('loaded');
});

//making the circle transition
//declaring all the variables
let circle = document.querySelectorAll('.circle');
let circle1 = document.querySelector('.circle1');
let navItems = document.querySelectorAll('.navItems');
let workTag = document.querySelector('.navItem1');
let aboutTag = document.querySelector('.navItem2');
let contactTag = document.querySelector('.navItem3');


//making the function for circles to handle media queries 
const mq = window.matchMedia("(max-width:1024px)");

const handleCircleMediaQueries = (navItem)=>{
    if (mq.matches){

        // positioning the circles
        if (navItem.classList.contains('navItem1')){
            circle1.style.right = "6.1rem";
        }
        if (navItem.classList.contains('navItem2')){
            circle1.style.right = "3.9rem";
        }
        if (navItem.classList.contains('navItem3')){
            circle1.style.right = "1.4rem";
        }
    }else{
        
        // positioning the circles
        if (navItem.classList.contains('navItem1')){
            circle1.style.right = "19.2rem";
        }
        if (navItem.classList.contains('navItem2')){
            circle1.style.right = "12.5rem";
        }
        if (navItem.classList.contains('navItem3')){
            circle1.style.right = "5.2rem";
        }
    }
}

//making the circle slide in
navItems.forEach(function(navItem){
    navItem.addEventListener('mouseenter', function(){
        this.classList.add('hover');
        circle1.classList.add('slide');
        handleCircleMediaQueries(navItem);

    })


})

//making the work,about and contact section transition
navItems.forEach(function(navItem){
    navItem.addEventListener('click',function(){
   //     document.querySelector('.box1').classList.add('boxTransition');
        for(let i =1 ; i<=3; i++){
            setTimeout(function(index){
                return function(){
                    document.querySelector(`.box${i}`).classList.add('boxTransition_come');
                }
            }(i),100*i);  
        }
        //===============================please understand this coocus =======================///          
    })
})
//making the circle slide away 
navItems.forEach(function(navItem){
    navItem.addEventListener('mouseleave', function(){
        this.classList.remove('hover');
        circle.forEach(function(circle){
            circle.classList.remove('slide');
        })
    })
})

var close_cont = document.createElement('div');
var contact_tagline = document.createElement('div');
var contact_details_container = document.createElement('div');
var contact_details = document.createElement('div');
var social_tags = document.createElement('div');
var bar1 = document.createElement('div');
var bar2 = document.createElement('div');
var pre_contact_1 = document.createElement('pre');
var pre_contact_2 = document.createElement('pre');
var contact_det_1 = document.createElement('pre');
var contact_det_2 = document.createElement('pre');
var social_tag_1 = document.createElement('pre');
var social_tag_2 = document.createElement('pre');
var social_tag_3 = document.createElement('pre');
var social_tag_4 = document.createElement('pre');
var contact_detail_heading = document.createElement('h5');
var social_tags_heading = document.createElement('h5');

//making content for the contact container
contactTag.addEventListener('click',function(){
    document.querySelector('.box3').append(close_cont);
    document.querySelector('.box3').append(contact_tagline);
    document.querySelector('.box3').append(contact_details_container);
    contact_details_container.append(contact_details);
    contact_details_container.append(social_tags);
    close_cont.append(bar1);
    close_cont.append(bar2);
    contact_tagline.append(pre_contact_1);
    contact_tagline.append(pre_contact_2);
    contact_details.append(contact_detail_heading);
    contact_details.append(contact_det_1);
    contact_details.append(contact_det_2);
    social_tags.append(social_tags_heading);
    social_tags.append(social_tag_1);
    social_tags.append(social_tag_2);
    social_tags.append(social_tag_3);
    social_tags.append(social_tag_4);
    
    close_cont.classList.add('close_container');
    bar1.classList.add('bars', 'bar1');
    bar2.classList.add('bars', 'bar2');
    contact_tagline.classList.add('Contact_tagline');
    pre_contact_1.innerHTML = "Let's create";
    pre_contact_2.innerHTML = "something amazing";
    contact_details_container.classList.add('Contact_details_container');
    contact_details.classList.add('contact_details');
    social_tags.classList.add('social_tags');
    contact_det_1.innerHTML = "Email: gghimanshu333@gmail.com";
    contact_det_2.innerHTML = "Phone: 7617638233";
    social_tag_1.innerHTML = "LinkedIn";
    social_tag_2.innerHTML = "Twitter";
    social_tag_3.innerHTML = "Instagram";
    social_tag_4.innerHTML = "Github";
    contact_det_1.classList.add('contact_details_pre');
    contact_det_2.classList.add('contact_details_pre');
    social_tag_1.classList.add('social_tags_pre');
    social_tag_2.classList.add('social_tags_pre');
    social_tag_3.classList.add('social_tags_pre');
    social_tag_4.classList.add('social_tags_pre');
    social_tags_heading.classList.add('social_tags_h5');
    contact_detail_heading.classList.add('contact_details_h5');
    contact_detail_heading.innerHTML= "CONTACT DETAILS";
    social_tags_heading.innerHTML = "SOCIALS";
    social_tags.querySelectorAll('.social_tags_pre').forEach(function(tag){
        tag.addEventListener('mouseenter',function(){
            tag.classList.add('social_tags_pre_hover');
        })
        tag.addEventListener('mouseleave',function(){
            tag.classList.remove('social_tags_pre_hover');
        })
    })


})
//making content for the about container
let about_text = document.createElement('pre');
aboutTag.addEventListener('click', function(){
    document.querySelector('.box3').append(close_cont);
    document.querySelector('.box3').classList.add('about_box');
    close_cont.append(bar1);
    close_cont.append(bar2);
    document.querySelector('.box3').append(about_text);
    about_text.classList.add('about_text_pre');
    
    close_cont.classList.add('close_container');
    bar1.classList.add('bars', 'bar1');
    bar2.classList.add('bars', 'bar2');
    about_text.innerHTML = `Hey there! I am  Himanshu, a first year engineering student currently based
    in India.I have a strong passion for working on new projects, with a 
            particular emphasis on transition and micro animations. 
In my free time I enjoy drawing, reading, cooking, dancing and learning 
                        about different language and cultures. 
                                    Thank you for visiting!`;
})
//making content for the work conatiner
workTag.addEventListener('click', function(){
    document.querySelector('.box3').append(close_cont);
    close_cont.append(bar1);
    close_cont.append(bar2);
    
    close_cont.classList.add('close_container');
    bar1.classList.add('bars', 'bar1');
    bar2.classList.add('bars', 'bar2');
})
// making the contact section disappear
close_cont.addEventListener('click',function(){
    let a = 3
    for(let i =1 ; i<=3; i++){

        setTimeout(function(index){
            return function(){
                document.querySelector(`.box${a}`).classList.add('boxTransition_go');
                a = a-1;
            }
        }(i),100*i);  
    }
    setTimeout(function(){
        for(let i =1 ; i<=3; i++){
            setTimeout(function(index){
                return function(){
                    document.querySelector(`.box${i}`).classList.remove('boxTransition_come');
                    document.querySelector(`.box${i}`).classList.remove('boxTransition_go');

                    //removing items of the contact details
        
                    contact_tagline.remove();
                    contact_details_container.remove();
                    contact_details.remove();
                    social_tags.remove();
                    pre_contact_1.remove();
                    pre_contact_2.remove();
                    contact_det_1.remove();
                    contact_det_2.remove();
                    social_tag_1.remove();
                    social_tag_2.remove();
                    social_tag_3.remove();
                    social_tag_4.remove();
                    contact_detail_heading.remove();
                    social_tags_heading.remove();
                    

                    //removing the items of about one
                    about_text.remove();
                    document.querySelector('.box3').classList.remove('about_box');
                }
            }(i),1800*i);  
        }    
    },100);

})
