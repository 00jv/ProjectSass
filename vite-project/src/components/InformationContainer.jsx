import {  AiFillPhone, AiOutlineMail, AiFillEnvironment  } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

function InformationContainer() {
    return (
        <section id="information">
            <div className='info-card'>
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <p>(79) 99846-4920</p>
                </div>
            </div>

            <div className='info-card'>
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <p>jvmatosfagundes@gmail.com</p>
                </div>
            </div>

            <div className='info-card'>
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Barra dos Coqueiros / SE</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer
