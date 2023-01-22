import './SectionWrapper.css'


const SectionWrapper = (props) => {
  return (
    <div className="section-wrapper text-light">
        {props.children}
    </div>
  )
}

export default SectionWrapper
