import React,{useState, useEffect} from 'react'
import image1 from '../img/app1.jpg'
import image2 from '../img/app2.jpg'
import image3 from '../img/site1.jpg'
import image4 from '../img/site2.jpg'

const Work = () => {
    const[change, setChange] = useState("col-md-6 mb-3 non")
    const[change2, setChange2] = useState("col-md-6 text-secondary non")

    const[active1, setActive1] = useState("active")
    const[active2, setActive2] = useState("")
    const[active3, setActive3] = useState("")
    const [affichage1, setAffichage1] = useState("parent col-md-3 ")
    const [affichage2, setAffichage2] = useState("parent col-md-3 ")
    const [affichage3, setAffichage3] = useState("parent col-md-3 ")
    const [affichage4, setAffichage4] = useState("parent col-md-3 ")
    const all = () => {
        setAffichage1("parent col-md-3 ")
        setAffichage2("parent col-md-3 ")
        setAffichage3("parent col-md-3 ")
        setAffichage4("parent col-md-3 ")
        setActive1("active")
        setActive2("")
        setActive3("")
    }
    const websites = () => {
        setAffichage1("parent col-md-3 ")
        setAffichage2("d-none")
        setAffichage3("parent col-md-3 ")
        setAffichage4("d-none")
        setActive1("")
        setActive2("active")
        setActive3("")
    }
    const apps = () => {
        setAffichage1("d-none")
        setAffichage2("parent col-md-3 ")
        setAffichage3("d-none")
        setAffichage4("parent col-md-3 ")
        setActive1("")
        setActive2("")
        setActive3("active")
    }
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 750) {
              setChange('col-md-6 mb-3 oui animated slideInUp')
              setChange2('col-md-6 oui text-secondary animated slideInDown')
            }
          })
    })

    return (
        <section id="work" className='bg-light'>
            <div className='container py-5'>

                <div className='row'>
                    <div className={change}>
                        <p className='latest-work'><strong>My latest work</strong></p>
                        <h1>Creative websites and application designs</h1>
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
                <div className="mt-5">
                    <span onClick={all} id={active1} className="spans"><strong>All</strong></span>
                    <span><strong> / </strong></span>
                    <span onClick={websites} id={active2} className="spans"><strong>Web design</strong></span>
                    <span><strong> / </strong></span>
                    <span onClick={apps} id={active3} className="spans"><strong>Mobile apps</strong></span>
                </div>
                <div className="my-5 d-flex container">
                    <div class={affichage1}>
                        <img className="img-fluid" src={image1} alt=""/>
                    </div>
                    <div class={affichage2}>
                        <img className="img-fluid" src={image3} alt=""/>
                    </div>
                    <div class={affichage3}>
                        <img className="img-fluid" src={image2} alt=""/>
                    </div>
                    <div class={affichage4}>
                        <img className="img-fluid" src={image4} alt=""/>
                    </div>
                </div>

            </div>
        </section>
            )
        }
        
export default Work