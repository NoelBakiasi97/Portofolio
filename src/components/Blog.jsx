import React,{useState, useEffect} from 'react'
import image1 from '../img/blog1.jpg'
import image2 from '../img/blog2.jpg'

const Blog = () => {
    const [change, setChange] = useState('non')
    const [change2, setChange2] = useState("d-flex pt-5 container non")
    const [change3, setChange3] = useState("d-flex py-5 container non")

    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 2180) {
              setChange('animated oui fadeInUp')
            }
          })
    })
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 2300){
                setChange2("d-flex pt-5 container oui animated flipInX")
                
            }
        })
    })
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 2650) {
                setChange3("d-flex py-5 container oui animated flipInX") 
            }
          })
    })
    
    return(
        <section id='blog' className="bg-light py-5">
            <div id="mesBlog" className="div-blog my-5 container">
                <div className={change}>
                    <h1 className="mb-5 text-center"><strong>Check our latest articles!</strong></h1>
                </div>
                <div className={change2}>     
                    <img className="img-blog rounded" src={image1} alt=""/>
                    <div id="div1">
                        <p><strong>January 15, 2020</strong></p>
                        <h2><strong>How to progress</strong></h2>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Alias eius labore cum aperiam vitae porro repellat numquam <br/> repellendus a neque. Sequi recusandae minus impedit. <br/> Nesciunt corrupti ratione nulla iste dolorum?</p>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className={change3}>
                    <div id="div2">
                        <p><strong>January 10, 2020</strong></p>
                        <h2><strong>Organise yourself</strong></h2>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Alias eius labore cum aperiam vitae porro repellat numquam <br/> repellendus a neque. Sequi recusandae minus impedit. <br/> Nesciunt corrupti ratione nulla iste dolorum?</p>
                        <button>Learn more</button>
                    </div>
                    <img className="img-blog rounded" src={image2} alt=""/>
                </div>
                
            </div>
        </section>
    )
}

export default Blog