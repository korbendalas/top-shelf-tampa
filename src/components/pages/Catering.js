import React from 'react';

import HeaderParalax from '../reusable/HeaderParalax';



class Catering extends React.Component{
    
    state={clicked:false};

   //to prevent form to submit data on ENTER key pressed.
    onFormSubmit=(event)=>{
        event.preventDefault();

        this.setState({clicked:true});

    }


 form =()=>{
        return(
         <div className="contact-us-container">
              
        <form onSubmit={this.onFormSubmit} className="contact-us-form">
           
            <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Name*" name="your-name" required/>
                    <input className="form-input" type="text" placeholder="Email address*" name="your-email" required/>
            </div> 
            <input className="form-input" type="text" placeholder="Phone" name="your-phone"/>
            <input className="form-input" type="text"
                placeholder="Amount of people being served" name="your-amount"/>

                <input className="form-input" type="text"
                    placeholder="Is the event being held on site or is delivery needed"
                    name="amount"/>  

            <textarea className="text-area" name="your-budget" 
                        placeholder="What the budget for the event
                         (either per person or total)
                         not including tax and service fee"
             />
             <div className="_2-form-inputs">
                    <input className="form-input" type="text"
                        placeholder="What’s the occasion" name="your-occasion"
                    />

                    <input className="form-input" type="text"
                        placeholder="When is the event (date and time)" name="your-date" 
                    />
             </div>   
             {/* insert radial buttons below here */}
                <div className="radio-buttons">
                What style of catering?<br/>
                    <input type="radio" id="cocktail-style" name="radio-catering" value="Cocktail Style" checked/>
                     <label for="cocktail-style">Cocktail Style</label><br/>

                    <input type="radio" id="boxed-lunch" name="radio-catering" value="Boxed Lunch" />
                    <label for="boxed-lunch">Boxed Lunch</label><br/>
                    <input type="radio" id="buffet-style" name="radio-catering" value="Buffet Style"/>
                    <label for="buffet-style">Buffet Style</label><br/>
                    <input type="radio" id="plated-dinner" name="radio-catering" value="Plated Dinner"/>
                    <label for="plated-dinner">Plated Dinner</label><br/>
                    <input type="radio" id="drink-service" name="radio-catering" value="Drink Service"/>
                    <label for="drink-service">Drink Service</label><br/>
                    <input type="radio" id="food-stations" name="radio-catering" value="Food stations"/>
                    <label for="food-stations">Food stations</label><br/>
                    <input type="radio" id="platters" name="radio-catering" value="Platters"/>
                    <label for="platters">Platters</label><br/>
                    <input type="radio" id="carving-stations" name="radio-catering" value="Carving Stations"/>
                    <label for="carving-stations">Carving Stations</label><br/>
                
                </div>
                    
 
             <textarea className="text-area" name="your-other" 
                        placeholder="Other"
             />

            <textarea className="text-area" name="your-needs" 
                        placeholder="Special food needs"
             />
            
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
// becausee contact Us and Catering are same 
// css classes are reused here from Contact us
        return(
            <div className="contact-us">
                     <HeaderParalax nameClass="catering" 
                        headerName="CATERING"
                        button={false}
                        
                    />
        
                        {/* .contact button is special class for
                        contac us page button for line height 3rem */}
                
                             {/* if form is submitted show message, 
                
                                 else show me the form*/}
                    {!this.state.clicked?this.form():this.formSend()}
                                      
                        {/* end contact us container */}
                                    
            </div>
            // end contact us page
           
        );
    }
    // end render
    
};

export default Catering;