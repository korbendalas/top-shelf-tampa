import React from 'react';
import HeaderParalax from '../reusable/HeaderParalax';
import Map from '../reusable/Map';


class ContactUs extends React.Component{
    state={clicked:false};

   //to prevent form to submit data on ENTER key pressed.
    onFormSubmit=(event)=>{
        event.preventDefault();

        this.setState({clicked:true});

    }


 form =()=>{
        return(
         <div className="contact-us-container">
              <p className="item-text">
                 Fill out this short form and someone from our team 
                 <br/> will contact you as soon as possible.
            </p>

        <form onSubmit={this.onFormSubmit} className="contact-us-form">
            <input className="form-input" type="text" placeholder="Name*" name="your-name" required/>
            <div className="_2-form-inputs">
                <input className="form-input" type="text" placeholder="Email*" name="your-email" required/>
                <input className="form-input" type="text" placeholder="Phone" name="your-phone" required/>
            </div> 

             <input className="form-input" type="text" placeholder="Subject" name="your-subject" required/>
            <textarea className="text-area" name="your-message"  placeholder="Message" required/>
            <input  type="submit" className="button button-orange submit" value="Send"/>
        </form>
    </div>
    );
 }

//  if button is clicked show that msg is sent
  formSend =()=>{
    return(
    <div className="contact-us-container">
          <div className="message-sent">
            <p>you successfully sent!</p>
          </div>   
        
    </div>)
}
    
    render(){

        return(
            <div className="contact-us">
                     <HeaderParalax nameClass="contact-us" 
                        headerName="CONTACT US"
                        button={true}
                        buttonName="become a part of our team"
                        buttonColor='blue'
                        buttonSize="button-size"
                    />
        
                        {/* .contact button is special class for
                        contac us page button for line height 3rem */}
                
                             {/* if form is submitted show message, 
                
                                 else show me the form*/}
                    {!this.state.clicked?this.form():this.formSend()}
                                      
                        {/* end contact us container */}
                     <Map/>  

                   <section className="contact-info">
                   
                    <div>
                             <p className="item-text "> Address</p>
                             <h3 className="item-header">
                                3173 Cypress Ridge Blvd, Wesley Chapel, FL 33544
                             </h3>
                            
                             <p className="item-text "> Phone</p>
                             <h3 className="item-header">
                                    813-953-1032
                             </h3>

                             <p className="item-text "> Hours of Operation</p>
                                 
                                <div className="hours-of-operation">
                                    <h4 className="item-price">
                                         Monday – Tuesday &nbsp;
                                    </h4>
                                       <h4 className="item-header">
                                       4 P.M – 11:30 P.M.
                                       </h4>    
                                </div> 

                                <div className="hours-of-operation">
                                    <h4 className="item-price">
                                         Wednesday – Friday &nbsp;
                                    </h4>
                                       <h4 className="item-header">
                                        11:30 A.M – 11:30 P.M.
                                     </h4> 
                                      
                                </div>  
                                <div className="hours-of-operation">
                                    <h4 className="item-price">
                                             Saturday &nbsp;
                                    </h4>
                                       <h4 className="item-header">
                                       11 A.M. – 11:30 P.M.
                                       </h4> 
                                      
                                </div>  
                                <div className="hours-of-operation">
                                    <h4 className="item-price">
                                                Sunday &nbsp;
                                    </h4>
                                       <h4 className="item-header">
                                       11 A.M. – 10:30 P.M.
                                       </h4> 
                                      
                                </div>  
                                
                                 

                     </div>
                                 
                   </section>               
            </div>
            // end contact us page
           
        );
    }
    // end render
    

};






export default ContactUs;

