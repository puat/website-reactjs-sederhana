import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeSection } from '../data/HomeSection'
import parse from 'html-react-parser'
import '../styles/Home.css'
import { homeCourses } from '../data/HomeCourses'
import { homeTutors, tutorList } from '../data/HomeTutors'
import Tutor from '../components/Tutor'
import { homePartner, partnerList } from '../data/HomePartner'
import Partner from '../components/Partner'
import { contact } from '../data/Contact'
import Contact from '../components/Contact'

function Home() {
    return (
        <>
            <Navbar />
            <div className='wrapper'>
                <section id="home">
                    <img src={homeSection.image} />
                    <div className="kolom">
                        {parse(homeSection.content)}
                    </div>
                </section>

                <section id="courses">
                    <div className="kolom">
                        {parse(homeCourses.content)}
                    </div>
                    <img src={homeCourses.image} />
                </section>

                <section id="tutors">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(homeTutors.content)}
                        </div>
                        <Tutor tutorList={tutorList} />
                    </div>
                </section>

                <section id="partners">
                    <div className="tengah">
                        <div className="kolom">
                            {parse(homePartner.content)}
                        </div>
                        <Partner partnerList={partnerList} />
                    </div>
                </section>

            </div>
            <Contact contact={contact} />
            <Footer />
        </>
    )
}

export default Home