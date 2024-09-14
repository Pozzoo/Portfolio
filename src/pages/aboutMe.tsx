import '../css/TextContent.css'
import PozzooGBC from '../assets/PozzooGBC.png'

const aboutMe = () => {

    return(
        <>
            <p>Hello! I'm Artur I am a Computer Scientist (in formation). I am  pretty versatile when it comes to programming, and a quick learner! I  really enjoy coding and learning new tech related stuff. I currently  study at IFSC (Instituto Federal de Santa Catarina) and I'm open for  work!</p>

            <div className="row">
                <div className="links-wrapper">
                    <span>Links:</span>
                    <ul>
                        <li><a href="https://github.com/Pozzoo/">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/artur-pozzo-a046682b1/">Linkedin</a></li>
                        <li><a href="https://ko-fi.com/pozzoo">Ko-Fi</a></li>
                    </ul>
                </div>

                <div className="image-wrapper">
                    <img height={256} src={PozzooGBC} alt="A photo of me!"/>
                    <p>This is me! (on a GameBoy camera)</p>
                </div>
            </div>

        </>
    );
}

export default aboutMe;