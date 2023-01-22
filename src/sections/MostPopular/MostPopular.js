import './MostPopular.css'
import {Card, SectionHeader, SectionWrapper } from '../../components/index'



import mostPopularData from '../../data/MostPopularData'

function MostPopular() {

  

const cards = mostPopularData.map(card => {
  return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
})


  return (
    <>
    
     <SectionWrapper>

      <SectionHeader>
      MostPopular
      </SectionHeader>
        
        <div className='most-popular-items d-flex justify-content-between flex-wrap'> 
        
        {cards}
          
        </div>
        
        </SectionWrapper>
      
    </>
  )
}

export default MostPopular
