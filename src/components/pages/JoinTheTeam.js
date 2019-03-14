import React from 'react';
import HeaderParalax from '../reusable/HeaderParalax';


class JoinTheTeam extends React.Component{
    
    state={clicked:false};

   //to prevent form to submit data on ENTER key pressed.
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.setState({clicked:true});
    }


 form =()=>{
        return(
         <div className="contact-us-container">
              <h1 className="form-heading">PERSONAL INFORMATION</h1>
            <form onSubmit={this.onFormSubmit} className="contact-us-form">
            <input className="form-input" type="text" placeholder="Name*" name="your-name" required/>
            <input className="form-input" type="text" placeholder="Birth date" name="your-birth" />

             <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Address" name="your-address" />
                    <input className="form-input" type="text" placeholder="City" name="your-city"/>
            </div>

            <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="State" name="your-state" />
                    <input className="form-input" type="text" placeholder="ZIP" name="your-zip"/>
            </div>

            <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Phone Number" name="your-phone" />
                    <input className="form-input" type="text" placeholder="Mobile Number" name="your-mobile"/>
            </div>

            <input className="form-input" type="text" placeholder="Email" name="your-email" required/>
           

            
             
             {/* insert radial buttons below here */}
                <div className="radio-buttons ">
                <form>
                    Are You A U.S. Citizen?<br/>
                    <input type="radio" id="citizen-yes" name="radio-catering" value="yes" checked/>
                     <label for="citizen-yes">yes</label>

                    <input type="radio" id="citizen-no" name="radio-catering" value="no" />
                    <label for="citizen-no">no</label><br/>
                    </form>
                </div>

                <div className="radio-buttons">
                <form>
                     Have You Ever Been Convicted Of A Felony?<br/>
                    <input type="radio" id="felony-yes" name="radio-catering" value="yes" checked/>
                     <label for="citizen-yes">yes</label>

                    <input type="radio" id="felony-no" name="radio-catering" value="no" />
                    <label for="citizen-no">no</label><br/>
                    </form>
                </div>

                <div className="radio-buttons">
                <form>
                     If Selected For Employment Are You Willing To Submit to a Pre-Employment Drug Screening Test?<br/>
                    <input type="radio" id="drug-test-yes" name="radio-catering" value="yes" checked/>
                     <label for="drug-test-yes">yes</label>

                    <input type="radio" id="drug-test-no" name="radio-catering" value="no" />
                    <label for="drug-test-no">no</label><br/>
                    </form>
                </div>
             
  <h1 className="form-heading">POSITION</h1>
                <input className="form-input" type="text"
                    placeholder="Position You Are Applying For" name="your-position" />
                <input className="form-input" type="text"
                    placeholder="Available Start Date" name="your-start-date" />
                <input className="form-input" type="text"
                    placeholder="Desired Pay" name="your-desired-pay" />    

        <div className="radio-buttons">
                <form>
                     Employment Desired 
                    <input type="radio" id="full-time" name="radio-catering" value="Full Time" checked/>
                     <label for="full-time">Full Time</label>

                    <input type="radio" id="part-time" name="radio-catering" value="Part Time" />
                    <label for="part-time">Part Time</label>

                    <input type="radio" id="seasonal" name="radio-catering" value="Seasonal/Temporary" />
                    <label for="seasonal">Seasonal/Temporary</label><br/>
                    </form>
                </div> 

        <h1 className="form-heading">SHIFT AVAILABILITY</h1> 


        <div className="input-label">From</div>       
        <div className="_2-form-inputs _7-form-inputs">
                    
                    <input className="form-input" type="text" placeholder="Mon" name="monday" />
                    <input className="form-input" type="text" placeholder="Tue" name="tuesday"/>
                    <input className="form-input" type="text" placeholder="Wed" name="wednesday" />
                    <input className="form-input" type="text" placeholder="Thu" name="thursday" />
                    <input className="form-input" type="text" placeholder="Fri" name="Friday" />
                    <input className="form-input" type="text" placeholder="Sat" name="Saturday" />
                    <input className="form-input" type="text" placeholder="Sun" name="Sunday" />
        </div>
        <div className="input-label">To</div>       
        <div className="_2-form-inputs _7-form-inputs">
                    
                    <input className="form-input" type="text" placeholder="Mon" name="monday" />
                    <input className="form-input" type="text" placeholder="Tue" name="tuesday"/>
                    <input className="form-input" type="text" placeholder="Wed" name="wednesday" />
                    <input className="form-input" type="text" placeholder="Thu" name="thursday" />
                    <input className="form-input" type="text" placeholder="Fri" name="Friday" />
                    <input className="form-input" type="text" placeholder="Sat" name="Saturday" />
                    <input className="form-input" type="text" placeholder="Sun" name="Sunday" />
        </div>
        <div className="input-label">Overnight</div>       
        <div className="_2-form-inputs _7-form-inputs">
                    
                    <input className="form-input" type="text" placeholder="Mon" name="monday" />
                    <input className="form-input" type="text" placeholder="Tue" name="tuesday"/>
                    <input className="form-input" type="text" placeholder="Wed" name="wednesday" />
                    <input className="form-input" type="text" placeholder="Thu" name="thursday" />
                    <input className="form-input" type="text" placeholder="Fri" name="Friday" />
                    <input className="form-input" type="text" placeholder="Sat" name="Saturday" />
                    <input className="form-input" type="text" placeholder="Sun" name="Sunday" />
        </div>

        <h1 className="form-heading">EDUCATION</h1> 
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="School Name" name="school-name" />
                    <input className="form-input" type="text" placeholder="Location" name="location"/>
        </div>
        <div className="_2-form-inputs _3-form-inputs">
                    <input className="form-input" type="text" placeholder="Years Attended" name="years-attended" />
                    <input className="form-input" type="text" placeholder="Degree Received" name="degree-received"/>
                    <input className="form-input" type="text" placeholder="Major" name="major"/>
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="School Name" name="school-name" />
                    <input className="form-input" type="text" placeholder="Location" name="location"/>
        </div>
        <div className="_2-form-inputs _3-form-inputs">
                    <input className="form-input" type="text" placeholder="Years Attended" name="years-attended" />
                    <input className="form-input" type="text" placeholder="Degree Received" name="degree-received"/>
                    <input className="form-input" type="text" placeholder="Major" name="major"/>
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="School Name" name="school-name" />
                    <input className="form-input" type="text" placeholder="Location" name="location"/>
        </div>
        <div className="_2-form-inputs _3-form-inputs">
                    <input className="form-input" type="text" placeholder="Years Attended" name="years-attended" />
                    <input className="form-input" type="text" placeholder="Degree Received" name="degree-received"/>
                    <input className="form-input" type="text" placeholder="Major" name="major"/>
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="School Name" name="school-name" />
                    <input className="form-input" type="text" placeholder="Location" name="location"/>
        </div>
        <div className="_2-form-inputs _3-form-inputs">
                    <input className="form-input" type="text" placeholder="Years Attended" name="years-attended" />
                    <input className="form-input" type="text" placeholder="Degree Received" name="degree-received"/>
                    <input className="form-input" type="text" placeholder="Major" name="major"/>
        </div>



  <h1 className="form-heading">REFERENCES</h1>     
  <div className="_2-form-inputs _4-form-inputs">
                    <input className="form-input" type="text" placeholder="Name" name="name" />
                    <input className="form-input" type="text" placeholder="Title" name="title"/>
                    <input className="form-input" type="text" placeholder="Company" name="company"/>
                    <input className="form-input" type="text" placeholder="Phone" name="phone"/>
        </div>
        <div className="_2-form-inputs _4-form-inputs">
                    <input className="form-input" type="text" placeholder="Name" name="name" />
                    <input className="form-input" type="text" placeholder="Title" name="title"/>
                    <input className="form-input" type="text" placeholder="Company" name="company"/>
                    <input className="form-input" type="text" placeholder="Phone" name="phone"/>
        </div>
        <div className="_2-form-inputs _4-form-inputs">
                    <input className="form-input" type="text" placeholder="Name" name="name" />
                    <input className="form-input" type="text" placeholder="Title" name="title"/>
                    <input className="form-input" type="text" placeholder="Company" name="company"/>
                    <input className="form-input" type="text" placeholder="Phone" name="phone"/>
        </div>
        <div className="_2-form-inputs _4-form-inputs">
                    <input className="form-input" type="text" placeholder="Name" name="name" />
                    <input className="form-input" type="text" placeholder="Title" name="title"/>
                    <input className="form-input" type="text" placeholder="Company" name="company"/>
                    <input className="form-input" type="text" placeholder="Phone" name="phone"/>
        </div>



 <h1 className="form-heading">EMPLOYMENT HISTORY</h1> 

 <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Name" name="employer-name" />
                    <input className="form-input" type="text" placeholder="Job Title" name="job-title"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Dates Employed" name="dates-employed" />
                    <input className="form-input" type="text" placeholder="Work Phone" name="work-phone"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Starting Pay Rate" name="starting-pay-rate" />
                    <input className="form-input" type="text" placeholder="Ending Pay Rate" name="ending-pay-rate"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Address" name="employer-address" />
                    <input className="form-input" type="text" placeholder="Employer City" name="employer-city"/>
                    
        </div>
        <div className="_2-form-inputs _5-form-column-inputs">
                    <input className="form-input" type="text" placeholder="Employer State" name="employer-state" />
                    <input className="form-input" type="text" placeholder="Employer ZIP" name="employer-zip"/>
                    
        </div>


 <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Name" name="employer-name" />
                    <input className="form-input" type="text" placeholder="Job Title" name="job-title"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Dates Employed" name="dates-employed" />
                    <input className="form-input" type="text" placeholder="Work Phone" name="work-phone"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Starting Pay Rate" name="starting-pay-rate" />
                    <input className="form-input" type="text" placeholder="Ending Pay Rate" name="ending-pay-rate"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Address" name="employer-address" />
                    <input className="form-input" type="text" placeholder="Employer City" name="employer-city"/>
                    
        </div>
        <div className="_2-form-inputs _5-form-column-inputs">
                    <input className="form-input" type="text" placeholder="Employer State" name="employer-state" />
                    <input className="form-input" type="text" placeholder="Employer ZIP" name="employer-zip"/>
                    
        </div>


 <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Name" name="employer-name" />
                    <input className="form-input" type="text" placeholder="Job Title" name="job-title"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Dates Employed" name="dates-employed" />
                    <input className="form-input" type="text" placeholder="Work Phone" name="work-phone"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Starting Pay Rate" name="starting-pay-rate" />
                    <input className="form-input" type="text" placeholder="Ending Pay Rate" name="ending-pay-rate"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Address" name="employer-address" />
                    <input className="form-input" type="text" placeholder="Employer City" name="employer-city"/>
                    
        </div>
        <div className="_2-form-inputs _5-form-column-inputs">
                    <input className="form-input" type="text" placeholder="Employer State" name="employer-state" />
                    <input className="form-input" type="text" placeholder="Employer ZIP" name="employer-zip"/>
                    
        </div>
<div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Name" name="employer-name" />
                    <input className="form-input" type="text" placeholder="Job Title" name="job-title"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Dates Employed" name="dates-employed" />
                    <input className="form-input" type="text" placeholder="Work Phone" name="work-phone"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Starting Pay Rate" name="starting-pay-rate" />
                    <input className="form-input" type="text" placeholder="Ending Pay Rate" name="ending-pay-rate"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Address" name="employer-address" />
                    <input className="form-input" type="text" placeholder="Employer City" name="employer-city"/>
                    
        </div>
        <div className="_2-form-inputs _5-form-column-inputs">
                    <input className="form-input" type="text" placeholder="Employer State" name="employer-state" />
                    <input className="form-input" type="text" placeholder="Employer ZIP" name="employer-zip"/>
                    
        </div>





<div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Name" name="employer-name" />
                    <input className="form-input" type="text" placeholder="Job Title" name="job-title"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Dates Employed" name="dates-employed" />
                    <input className="form-input" type="text" placeholder="Work Phone" name="work-phone"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Starting Pay Rate" name="starting-pay-rate" />
                    <input className="form-input" type="text" placeholder="Ending Pay Rate" name="ending-pay-rate"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Address" name="employer-address" />
                    <input className="form-input" type="text" placeholder="Employer City" name="employer-city"/>
                    
        </div>
        <div className="_2-form-inputs _5-form-column-inputs">
                    <input className="form-input" type="text" placeholder="Employer State" name="employer-state" />
                    <input className="form-input" type="text" placeholder="Employer ZIP" name="employer-zip"/>
                    
        </div>





 <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Name" name="employer-name" />
                    <input className="form-input" type="text" placeholder="Job Title" name="job-title"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Dates Employed" name="dates-employed" />
                    <input className="form-input" type="text" placeholder="Work Phone" name="work-phone"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Starting Pay Rate" name="starting-pay-rate" />
                    <input className="form-input" type="text" placeholder="Ending Pay Rate" name="ending-pay-rate"/>
                    
        </div>
        <div className="_2-form-inputs">
                    <input className="form-input" type="text" placeholder="Employer Address" name="employer-address" />
                    <input className="form-input" type="text" placeholder="Employer City" name="employer-city"/>
                    
        </div>
        <div className="_2-form-inputs _5-form-column-inputs">
                    <input className="form-input" type="text" placeholder="Employer State" name="employer-state" />
                    <input className="form-input" type="text" placeholder="Employer ZIP" name="employer-zip"/>
                    
        </div>  

        <input className="form-input" type="text" placeholder="Date" name="date"/>     
            
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
                     <HeaderParalax nameClass="join-the-team header-paralax-content-weekly" 
                        headerName="BECOME A PART OF OUR TEAM"
                        button={false}
                        contentClass="extend-content"
                        
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

export default JoinTheTeam;