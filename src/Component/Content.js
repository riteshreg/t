import location_icon from '../Resources/location_icon.png'

export default function Content(props){
    return(

        <div className="contentContainer">

            <div className="imageContainer">
                <img src={props.imageUrl} alt="img" id="placeImage"></img>
            </div>
                <div className="DetailedContainer">
                    <div className="locationContainer">
                        <img src={location_icon} alt="img"id='location_img'></img>
                        <p id='country_text'>{props.location}</p>
                        <a href={props.googleMapsUrl} id="location_link">View On Google Map</a>
                    </div>
                    <h1 id='locationName'>{props.title}</h1>
                    <div className="dateContainer">
                        {props.startDate} - {props.endDate}
                    </div>

                        <p id='detailedTxt'>{props.description}</p>

                </div>


        </div>
)
}