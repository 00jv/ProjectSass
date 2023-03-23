
import Avatar from '../img/perfil.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import "../styles/components/sidebar.sass"

function Sidebar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="João Victor" ></img>
            <p className="title">Analista em desevolvimento de Sistemas</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    )
}

export default Sidebar
