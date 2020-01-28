import React from 'react'

const About = ()=> {
    return(
        <section id="sec-about" className='my-5 container'>
            <div className='row'>
                <div className='col-6'>
                    <p className='text-info'><strong>Basic info about me</strong></p>
                    <h1>Creati Design- A modern web design agency in Brussels, Belgium</h1>
                </div>
                <div className='col-6 text-secondary'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum corporis ex voluptatibus repudiandae voluptates rerum adipisci suscipit perferendis nesciunt ipsa.
                    </p>
                    <p className='mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus impedit corrupti exercitationem quae porro ea nesciunt nemo qui quo aliquid quaerat.
                    </p>
                </div>
            </div>
            <div className="d-flex mt-5">
                <div>
                    <h2><strong>01.</strong></h2>
                    <p><strong>Website design</strong></p>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus impedit corrupti exercitationem quae porro ea nesciunt nemo</p>
                </div>
                <div className="mx-5">
                    <h2><strong>02.</strong></h2>
                    <p><strong>Mobile app design</strong></p>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus impedit corrupti exercitationem quae porro ea nesciunt nemo</p>
                </div>
                <div>
                    <h2><strong>03.</strong></h2>
                    <p><strong>Project management</strong></p>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, doloribus impedit corrupti exercitationem quae porro ea nesciunt nemo</p>
                </div>
            </div>
        </section>
    )
}

export default About