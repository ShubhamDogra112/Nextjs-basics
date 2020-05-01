import React ,{Fragment, useState} from 'react'
import { MDBBtn , MDBMask , MDBView ,MDBBox ,} from "mdbreact";
import axios from 'axios'
import path from 'path'
import { strict } from 'assert';
import MDBGallery from '../Components/Gallery/Gallery'




const App = (props)=>{

    
// props in functional base components
    const [file , setFile] = useState('')
    const [filename , setFilename] = useState("Choose File")
    const [url ,setUrl] = useState('')
    const [pred , setPred] = useState({
        received:false,
        data:null
    })

    

    const fileSelectHandler = (event)=>{
        setFile(event.target.files[0])
        setFilename(event.target.files[0].name)

        let url =URL.createObjectURL(event.target.files[0])
        setUrl(url)

    }


    // an examples of post request
    const fileUploadHandler = async ()=>{

        const fd = new FormData()
        fd.append('image' , file)

        try{
        const res = await axios.post('http://localhost:5000/upload' , fd ,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        
        console.log(res)
        setPred({
            received:true,
            data:res.data.predictions
        })

        }
        catch(err){
            console.log(err)
        }   

        

    }

  

    


    
    


    
    


    return(

        <Fragment>

    
        

            
           

        </Fragment>
        
    )
}


// get request is sent like this


App.getInitialProps = async ()=>{
    const res = await axios.get("http://localhost:5000/hello")
    
    return{
        data:res.data

    }
}

export default App