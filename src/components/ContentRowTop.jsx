import ContentRowInfo  from "./ContentRowInfo";
import LastProductInDb from "./LastProductInDb";

function ContentRowTop () {
    return (
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">DashBoard de <a href="http://localhost:3000/" target="_blank" className='links'>Muller Gallery</a> </h1>
					</div>
		<ContentRowInfo/>	
					
		<div className="Row">
		<LastProductInDb/>	
		
			</div>		
		</div>
    
    )
}

export default ContentRowTop;