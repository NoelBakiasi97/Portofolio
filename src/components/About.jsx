import React,{useState, useEffect} from 'react'

const About = ()=> {
    const[change, setChange] = useState("col-md-6 mb-4  non")
    const[change2, setChange2]  = useState("col-md-6 text-secondary  non")
    const[change3, setChange3] = useState("row w-100 mt-5 non")
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 160) {
              setChange('col-md-6 mb-4  oui animated fadeInLeft')
              setChange2('col-md-6  oui text-secondary animated fadeInRight')
            }
          })
    })
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 440){
                setChange3("row mt-5 oui animated fadeInUp")
            }   
        })
    })

    return(
        <section id="sec-about" className='py-5 container'>
            <div className='row'>
                <div className={change}>
                    <p className='basic-info'><strong>Basic info about me</strong></p>
                    <h1>Creati Design- A modern web design agency in Brussels, Belgium</h1>
                </div>
                <div className={change2}>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum corporis ex voluptatibus repudiandae voluptates rerum adipisci suscipit perferendis nesciunt ipsa.
                    </p>
                    <p className='mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus impedit corrupti exercitationem quae porro ea nesciunt nemo qui quo aliquid quaerat.
                    </p>
                </div>
            </div>
            <div className={change3}>
                <div className="col-md-4">
                    <h2><strong>01.</strong></h2>
                    <p><strong>Website design</strong></p>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus impedit corrupti exercitationem quae porro ea nesciunt nemo</p>
                </div>
                <div className="col-md-4">
                    <h2><strong>02.</strong></h2>
                    <p><strong>Mobile app design</strong></p>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus impedit corrupti exercitationem quae porro ea nesciunt nemo</p>
                </div>
                <div className="col-md-4">
                    <h2><strong>03.</strong></h2>
                    <p><strong>Project management</strong></p>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus impedit corrupti exercitationem quae porro ea nesciunt nemo</p>
                </div>
            </div>
        </section>
    )
}

export default About