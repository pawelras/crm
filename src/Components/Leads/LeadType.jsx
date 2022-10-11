export const LeadType = (props) => {

    return(
        <div className="Tile">
            <h2>{props.leadTitle}</h2>
            
            <p>{props.description}</p>
        </div>
    )
}