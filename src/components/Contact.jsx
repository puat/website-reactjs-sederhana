import '../styles/Contact.css'
import parse from 'html-react-parser'
function Contact(props) {
    return (
        <div id="contact">
            <div className="wrapper">
                <div className="footer">
                    {
                        props.contact.map((item,i) => {
                            return (
                                <div className="footer-section" key={i}>
                                    {parse(item.content)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact