import '../styles/Partner.css'
function Partner(props) {
    return (
        <div className="partner-list">

            {
                props.partnerList.map((item, i) => {

                    return (

                        <div className="kartu-partner" key={i}>

                            <img src={item.image} />

                        </div>
                    )
                })
            }

        </div>
    )
}

export default Partner