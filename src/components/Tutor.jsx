import '../styles/Tutors.css'
function Tutor(props) {
    return (
        <div className="tutor-list">
            {
                props.tutorList.map((item,i) => {
                    return (

                        <div className='kartu-tutor' key={i}>
                            <img src={item.image} />
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tutor