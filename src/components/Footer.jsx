import React,{useState, useEffect} from 'react'

const Footer = () => {
    const[change, setChange] = useState("fab fa-linkedin-in a1 non")
    const[change2, setChange2] = useState("fab fa-instagram a2 non")
    const[change3, setChange3] = useState("fab fa-twitter a3 non")
    const[change4, setChange4] = useState("fab fa-google-plus-g a4 non")
    const[change5, setChange5] = useState("text-light non")
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 3620) {
              setChange("fab fa-linkedin-in a1 oui animated wobble")
              setChange2("fab fa-instagram a2 oui animated wobble")
              setChange3("fab fa-twitter a3 oui animated wobble")
              setChange4("fab fa-google-plus-g a4 oui animated wobble")
              setChange5("text-light oui animated rollIn")
            }
          })
    })

    return (
        <footer className="bg-dark text-center">
            <div>
                <a target="_blank" href="https://www.linkedin.com/in/bakiasi-noel-9049091a0/"><i className={change}></i></a>
                <a target="_blank" href="https://www.instagram.com/noelbakiasi/"><i className={change2}></i></a>
                <a target="_blank" href="https://twitter.com/"><i className={change3}></i></a>
                <a target="_blank" href="https://mail.google.com/mail/u/0/#drafts"><i class={change4}></i></a>
            </div>
            <div className='h6'>
                <h6 className={change5}>©2020 Creati Design. All rights reserved</h6>
            </div>
        </footer>
    )
}

export default Footer