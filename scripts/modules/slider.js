const slider = (container, navigation, time) =>{
    

    const slider = document.querySelector(container);
    const items = document.querySelector(container).children;
    console.log(items.length);

    var nav = createNav(slider, items);
    console.log(nav);

    let i = 0;
    changeNav(slider, i);
    items[i].classList.add("activeSlide");
    
    changeNav(nav, i);

    const loop = setInterval(()=>{
        if(i < items.length){
            console.log(i + " < " + items.length);
            clearStyle(items);

            /* let curr = slider.querySelector('.activeSlide');
            curr.classList.add('slideOut');
            curr.classList.remove('activeSlide'); 
            curr.classList.remove('slideOut');
            slider.querySelector('.slideOut').classList.remove('slideOut'); */
            items[i].classList.add('activeSlide');
            changeNav(nav, i);
            i++;
        } else{
            i=0;
            clearStyle(items);
            items[i].classList.add("activeSlide");
            changeNav(nav, i);
            console.log('reset');
        }
        
    },time);

    function createNav(parent, items){
        var nav = document.createElement('div');
        nav.classList.add('slider_nav');
        parent.parentNode.appendChild(nav);

        Array.from(items).forEach((item, i)=>{
            nav.appendChild(document.createElement('div')).classList.add('slider_nav-item');
        });
        return nav;
    }
    function changeNav(nav, i){
        const items = nav.children;
        Array.from(items).forEach((item)=>{
            item.classList.remove('active');
        });
        items[i].classList.add('active');
        //const nav = parent.querySelector('slider_nav').children;
        //console.log(nav);
    }
    function clearStyle(items){
        Array.from(items).forEach((item)=>{
            item.classList.remove('activeSlide');
        });
    }


    /* setInterval(()=>{
        if(i<=items.length-1){
            console.log(i + " < " + items.length);
            
            items[i].classList.remove("activeSlide");
            items[i++].classList.add("activeSlide");
            console.log( items[i].classList);
            
            //items[i++].classList.add('activeSlide'); 
           // i++;
        }else{
            i=0;
            
        }
        //i++;
    },1000); */
    
 
    /* Array.from(items).forEach((item, i) => {
        setTimeout(()=>{
            console.log(i);
        }, 3000);
        
    });

    function changeSlide(currentSlie, nextSlide){
        items[i].classList.remove('activeSlide');
        items[i++].classList.add('activeSlide');
    }; */
}

export default slider;