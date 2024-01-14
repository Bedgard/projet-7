import '../styles/Information.css'


function Information({title, location,name, tags, photo, rating}) 

{
    const score = [1,2,3,4,5]
   
        return (
            <div className='container'>

             <div className="container__information">
            <h1>{title}</h1>
            <h3>{location}</h3>
 
        <div className="container__content">
        {tags}
        </div>
            </div>
            
            <div className='container__description'>
                <div className='container__description__profil'>
                <p>{name[0]}<br/>{name[1]}</p>
                <img src={photo} alt="" className='profil' />
                </div>

                <div className='container-description__stars'>
             {score.map((score) => ( <div>{ rating >= score ? <div ><i className="fas fa-star"></i></div> : <div><i className="fas fa-star grey"></i></div>}</div>
))}</div>
     </div>

 </div>
 
           
        )

}

export default Information