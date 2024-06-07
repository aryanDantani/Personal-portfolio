import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        
        <div className="content">
            <div className="name">
                MY NAME IS <span>ARYAN</span>
            </div>
            <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores officiis beatae repellendus rem ullam, ipsam nemo dolorem dolorum illo laborum. Ea sed dolor ab qui, doloremque accusantium esse blanditiis possimus!
            </div>
            
            <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>

        <div className="avatar">
            <div className="card">
                <img src="/profile.png" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>03/12</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
