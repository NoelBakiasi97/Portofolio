import React,{useState, useEffect} from 'react'

const Contact = () => {
    const[change, setChange] = useState("col-md-6 div1Contact container text-white text-center py-5 non")
    const[change2, setChange2] = useState("col-md-6 div2Contact py-5 container non")
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 3120) {
              setChange("col-md-6 div1Contact container text-white text-center py-5 oui animated fadeInUp")
              setChange2("col-md-6 div2Contact py-5 container oui animated fadeInUp") 
            }
          })
    })

    return (
        <section id="contact" className="row no-gutters sec-contact">

            <div className={change}>
                <span><strong>Our contact mamène si si</strong></span>
                <br />
                <br />
                <h1>Creati Design, Brussels</h1>
                <br />
                <span>Place de la Minoterie 10, 1080 Brussels, Belgium</span>
                <br />
                <br />
                <span>Office telephone: 02544564</span>
                <br />
                <span>Mobile phone: 0484121212</span>
                <br />
                <br />
                <span>email: creati-design@gmail.com</span>
                <br />
                <br />
                <span>Monday-Friday: 9am to 5pm</span>
            </div>

            <div className={change2}>
                <div className="text-center">
                    <span className="mon-gars"><strong>Contact mon gars</strong></span>
                    <br />
                    <br />
                    <h2>Let's get in touch</h2>
                </div>
                <br />
                <br />
                <form className="w-75 mx-auto">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">First name</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Last name</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="" />
                        </div>
                        <div className="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="" />
                    </div>
                    <div className="row pt-3">
                        <div className="text-right col-md-7">
                            <button type="submit">Sign up</button>
                        </div>
                        <div className="text-right col-md-5 pt-2">
                            <a href="">Already an account?</a>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Contact