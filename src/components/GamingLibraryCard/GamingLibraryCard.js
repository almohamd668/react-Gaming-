import  './GamingLibraryCard.css'
import {SecondaryButton} from '../index'
const GamingLibraryCard = (props) => {
  return (
    <div className='gaming-library-card'>
     <ul className='d-flex justify-content-between align-items-center'>
        <li><img src={props.image} alt=""></img></li>
        <li><h4>{props.title}</h4><span>{props.category}</span></li>
        <li><h4>Date Added</h4><span>{props.date_added}</span></li>
        <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
        <li><h4>Currently</h4><span>{props.download}</span></li>
        <SecondaryButton>Donload</SecondaryButton>
        {/* <div className="main-button">
            <a href="/#">Donload</a>
        </div> */}
     </ul>
     
    </div>
  )
}

export default GamingLibraryCard
