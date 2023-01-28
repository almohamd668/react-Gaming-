import './GamingLibrary.css'
import {GamingLibraryCard, SectionHeader, SectionWrapper } from '../../components/index'
import GamingLibraryData from '../../data/GamingLibraryData'


const GamingLibrary = () => {

    
const cards = GamingLibraryData.map(card => {
    return <GamingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.download} />
  })
  

  return (
    <div className=''>
     
     <SectionWrapper>

      <SectionHeader>
      GamingLibrary
      </SectionHeader>
        
        <div className='gaming-library-cards d-flex justify-content-between flex-wrap'> 
        
         {cards}
          
        </div>
        
        </SectionWrapper>

    </div>
  )
}

export default GamingLibrary
