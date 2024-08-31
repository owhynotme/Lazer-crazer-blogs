const counttag=document.getElementsByClassName('middlesection')[0];
const leftsub=document.getElementsByClassName('leftadder')[0];
const rightadd=document.getElementsByClassName('rightadder')[0];
const slottag=document.querySelector('.slotlist');



let time="";

console.log(slottag)
let count=1;
counttag.innerHTML=`${count}`;





let flag=0;

const slots=document.getElementsByClassName('slots');
console.log(slots);
slottag.addEventListener('click',(event)=>{
    currenttarget=event.target;
    console.log(currenttarget.classList);
    if(currenttarget.classList.contains('slots')){
        flag=1;
        currenttarget.style.borderColor='#2CF80B'
        currenttarget.style.boxShadow='0 0 20px #2CF70B'
        time=currenttarget.innerHTML;
        
        for (let i = 0; i < slots.length; i++) {
            const element= slots[i];
            if(element===currenttarget){
                continue;
            }
            else{
                element.style.borderColor='white'
                element.style.removeProperty('box-shadow')
            }
        }
    }
});


//calender part
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();







const todaysmonthyear=document.getElementsByClassName('current-date')[0];
const changeddate=todaysmonthyear.innerHTML;
let givenmonth=date.getMonth();
let y= changeddate.substring(0,changeddate.length-5)
let z= changeddate.substring(changeddate.length-4);
for (let i = 0; i < 12; i++) {
    const element = months[i];
    if(element==y){
        givenmonth=i;
    }
}


let selecteddate=date.getDate();
let selectedmonth=givenmonth;
let selectedyear=z;






prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
        const todaysmonthyear=document.getElementsByClassName('current-date')[0];
        const changeddate=todaysmonthyear.innerHTML;
        let givenmonth=date.getMonth();
        let y= changeddate.substring(0,changeddate.length-5)
        let z= changeddate.substring(changeddate.length-4);
        for (let i = 0; i < 12; i++) {
            const element = months[i];
            if(element==y){
                givenmonth=i;
            }
        }


         selecteddate=date.getDate();
         selectedmonth=givenmonth;
         selectedyear=z;

    });
});






const fetchslots=()=>{
    let todaysdate =selectedyear+'/'+(selectedmonth+1)+'/'+selecteddate;
        console.log(todaysdate)


        //fetching the API 
        let fetchedslots=[];

        const api_url ="http://localhost:5000/api/date/getslots/";
  
            // Defining async function
            fetch(api_url, {
                method: 'POST',
                body: JSON.stringify({
                    slotdate:todaysdate,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            }).then(function (response) {
                if (response.ok) {
                    return response.json();
                }
            }).then(function (data) {
                console.log(data);
                fetchedslots=data.slots
            }).then(function(){
                

                const slotlist=document.getElementsByClassName('slotlist')[0];

                let slots="";
                for (let i = 0; i < fetchedslots.length; i++) {
                    const element = fetchedslots[i];
                    if(element.slotcount>=count){
                        slots+=`<div class="slots">${element.slottime}</div>`;
                    }
                    
                }


                slotlist.innerHTML=slots


            })

}



fetchslots();



//calender date elements link  element was there



// console.log(linkele)

daysTag.addEventListener("click",(event)=>{
    currenttarget=event.target;
    console.log(currenttarget.tagName)
const linkele=document.querySelectorAll(".days li")

    if(currenttarget.tagName==='LI'){
        flag=0;
        currenttarget.classList.add('active');
        selecteddate=currenttarget.innerHTML;
        console.log(selecteddate)

        for (let i = 0; i < linkele.length; i++) {
            const element = linkele[i];
            if(element===currenttarget){
                continue;
            }
            else{
                element.classList.remove('active');
            }
        }



        fetchslots();
            
            

        }
       

    }
)


const submitbutton=document.getElementsByClassName('submitsection')[0];
submitbutton.addEventListener('click',(event)=>{
    if(flag){
        let today =selectedyear+'/'+(selectedmonth+1)+'/'+selecteddate;
    console.log(today)
    console.log(count)
    console.log(time)
    const bookingsection=document.getElementsByClassName('bookingsection')[0];
    bookingsection.classList.add('blurback')
    const popupsection=document.getElementsByClassName('popupsubsection')[0];
    popupsection.style.top='50%';
    popupsection.style.visibility='visible';
    popupsection.style.opacity='1';
    popupsection.style.transition='0.5s';
    popupsection.style.zIndex='1';
    }
    

   

});




rightadd.addEventListener("click",(event)=>{
    
    count++;
    if(count==16){
        count=15
    }
    counttag.innerHTML=`${count}`;
    fetchslots();     
});
leftsub.addEventListener("click",(event)=>{
    counttag.innerHTML=`${count}`;
    count--;
    if(count==0){
        count=1
    }
    fetchslots();        
        

});


//popup cancel Javascript
const cancelbutton=document.getElementById('cancel');
cancelbutton.addEventListener('click',(event)=>{
    const bookingsection=document.getElementsByClassName('bookingsection')[0];
    bookingsection.classList.remove('blurback')
    const popupsection=document.getElementsByClassName('popupsubsection')[0];
    popupsection.style.top='40%';
    popupsection.style.visibility='hidden';
    popupsection.style.opacity='0';
    popupsection.style.transition='0.5s';
    popupsection.style.zIndex='-1';
    
    
   
});



//final submit option


const finalsubmitbutton=document.querySelectorAll('.popupsubmit input')[0];

finalsubmitbutton.addEventListener('click',(event)=>{
    const arr=document.querySelectorAll(".popupsections input");
    const arrp=document.querySelectorAll(".popupsections select");
    let clientname=arr[0].value;
    let clientphoneno=arr[1].value;
    let clientemail=arr[2].value;
    let package=arrp[0].value

    let todaysdate =selectedyear+'/'+(selectedmonth+1)+'/'+selecteddate;
        console.log(todaysdate)




    // const api_url1 ="http://localhost:5000/api/date/bookslot" 
    // fetch(api_url1, {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //         slotdate:todaysdate,
    //         time:time,
    //         slots:count
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8'
    //     }
    // }).then(function (response) {
    //     if (response.ok) {
    //         return response.json();
    //     }
    // }).then(function (data) {
    //     console.log(data);
    // });













    const api_url ="http://localhost:5000/api/booking/addbooking";
  
    // Defining async function
    fetch(api_url, {
        method: 'POST',
        body: JSON.stringify({
        name:clientname,
        email:clientemail,
        phoneno:clientphoneno,
        date:todaysdate,
        slotcount:count,
        slot:time,
        package:package
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
    }).then(function (data) {
        console.log(data);




        // paste SMTP request here







        //SMTP request ends here





        
        const api_url1 ="http://localhost:5000/api/date/bookslot" 
    fetch(api_url1, {
        method: 'PUT',
        body: JSON.stringify({
            slotdate:todaysdate,
            time:time,
            slots:count
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
    }).then(function (data) {
        console.log(data);
    });





        const bookingsection=document.getElementsByClassName('bookingsection')[0];
    bookingsection.classList.remove('blurback')
    const popupsection=document.getElementsByClassName('popupsubsection')[0];
    popupsection.style.top='40%';
    popupsection.style.visibility='hidden';
    popupsection.style.opacity='0';
    popupsection.style.transition='0.5s';
    popupsection.style.zIndex='-1';
    
    });

}


);
