import './OneLogement.css'

export default function OneLogement( props ){
    return (
                <div className="logementContainer">
                  <div className="logementTitle">{props.data.title}</div>
                  <div className="logementLocation">{props.data.location}</div>
    
                  <div className="tagsList">
                    {props.data.tags.map(res => (
                      <div className="tags">{res}</div>
                    ))}
                  </div>
    
                  <div className="hostnameContanair">
                    <div className="hostName">{props.data.host.name}</div>
                    <div className="hostnameImage">
                      <img src={props.data.host.picture} alt=''/>
                    </div>
                  </div>
    
                  <div className="rating">
                    {(() => {
                      switch (props.data.rating) {
                        case '1':
                          return <div className="rating1"></div>
                        case '2':
                          return <div className="rating2"></div>
                        case '3':
                          return <div className="rating3"></div>
                        case '4':
                          return <div className="rating4"></div>
                        case '5':
                          return <div className="rating5"></div>
                        default:
                          return null
                      }
                    })()}
                  </div>

                </div>
              


            )
}