let raja_contaainer=document.querySelector('#raja')

let button=document.querySelector('#click')
button.addEventListener('click',(e)=>{

    setTimeout(()=>{
        let raja =document.querySelector('#raja')
        let para=document.createElement('p')
        para.classList.add("para")
        para.innerText="let's start"
        raja.append(para)
        setTimeout(()=>{
            para.innerText=10
            setTimeout(()=>{
                para.innerText=9
                setTimeout(()=>{
                para.innerText=8
                setTimeout(()=>{
                    para.innerText=7
                    setTimeout(()=>{
                        para.innerText=6
                        setTimeout(()=>{
                            para.innerText=5
                            setTimeout(()=>{
                                para.innerText=4
                                setTimeout(()=>{
                                    para.innerText=3
                                    setTimeout(()=>{
                                        para.innerText=2
                                        setTimeout(()=>{
                                            para.innerText=1
                                            setTimeout(()=>{
                                                para.innerText="happy independence day"
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
    

})


















