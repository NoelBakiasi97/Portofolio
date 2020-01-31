import React, {useState, useEffect } from 'react'

const Pricing = () => {
    const [change, setChange] = useState("text-center container non")
    const [change2, setChange2] = useState("row no-gutters justify-content-around div-pricing non")
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1500) {
                setChange("text-center container oui animated slideInDown")
            }
        })
    })
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1850) {
                setChange2("row no-gutters div-pricing oui animated rubberBand")
            }  
        })
    })

    return (
        <section id="pricing" className="my-5">
            <div className={change}>
                <h1 id="h1Pricing" className="my-5"><strong>Easy pricing</strong></h1>
                <p className="text-secondary mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque soluta dignissimos fuga, ut id nemo amet. Molestias, iure dolor incidunt aliquid expedita non ad sit distinctio commodi quod quaerat optio.</p>
            </div>
            <div className={change2}>
                <div className="col-xl-2 div-price mx-2 my-2 px-4 py-3 rounded">
                    <h3 id="h3"><strong>Basic</strong></h3>
                    <hr />
                    <div>
                        <h3>$30/month</h3>
                        <span className="text-secondary">Nice price bruh lemme get that</span>
                    </div>
                    <hr />
                    <div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Full access</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Unlimited bandwidth</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Powerful admin pannel</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-times px-2 text-danger"></i>
                            <p><strong>Email accounts</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-times px-2 text-danger"></i>
                            <p><strong>8 free advices/month</strong></p>
                        </div>
                    </div>
                    <div className="text-center pt-3">
                        <button><strong>Buy now</strong></button>
                    </div>
                </div>
                <div className="col-xl-2 div-price mx-2 my-2 px-4 py-3 rounded">
                    <h3 id="h3"><strong>Advanced</strong></h3>
                    <hr />
                    <div>
                        <h3>$60/month</h3>
                        <span className="text-secondary">Nice price bruh lemme get that</span>
                    </div>
                    <hr />
                    <div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Full access</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Unlimited bandwidth</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Powerful admin pannel</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Email accounts</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-times px-2 text-danger"></i>
                            <p><strong>8 free advices/month</strong></p>
                        </div>
                    </div>
                    <div className="text-center pt-3">
                        <button><strong>Buy now</strong></button>
                    </div>
                </div>
                <div className="col-xl-2 mx-2 my-2 div-price px-4 py-3 rounded">
                    <h3 id="h3"><strong>Pro</strong></h3>
                    <hr />
                    <div>
                        <h3>$100/month</h3>
                        <span className="text-secondary">Nice price bruh lemme get that</span>
                    </div>
                    <hr />
                    <div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Full access</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Unlimited bandwidth</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Powerful admin pannel</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>Email accounts</strong></p>
                        </div>
                        <div className="row">
                            <i class="fas fa-check px-2 text-success"></i>
                            <p><strong>8 free advices/month</strong></p>
                        </div>
                    </div>
                    <div className="text-center pt-3">
                        <button><strong>Buy now</strong></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing