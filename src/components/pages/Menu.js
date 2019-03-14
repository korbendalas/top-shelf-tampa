import React from 'react';
import HeaderParalax from '../reusable/HeaderParalax';
import MenuItem from '../reusable/MenuItem';
import MenuItem2 from '../reusable/MenuItem2';

import startersImg from '../../img/menu/Menu_Starters.jpg';
import menuWings from '../../img/menu/Menu_Wings.jpg';
import menuKids from '../../img/menu/Menu_Kids.jpg';
import menuOffTheBench from '../../img/menu/Menu_OffTheBench.jpg';
import menuSides from '../../img/menu/Menu_Sides.jpg';

const Menu =()=>{
    let headerName ="MENU";
    let headerText = "The Top Shelf Sports Lounge isn’t just another Tampa Bay sports bar, we are a great restaurant with traditional and signature dishes you will love. Our kitchen staff is dedicated to providing exceptional cuisine to provide you with one of the best Wesley Chapel restaurant dining experiences.";
    
    return(
<div className="menu-page">
            <HeaderParalax headerName={headerName}
             headerText={headerText} 
             nameClass="menu"
             button={true}
             buttonName='download menu'
             buttonColor="blue"
             />
        
        
<section className="menu-body">
    <div className="menu-container">
            
            <h1 className="menu-heading">STARTERS</h1>

     <div className="starters-menu">
        
         <div className="starters-menu-left">
                <MenuItem itemHeader="YBOR EGGROLL"
                itemPrice="$8.95"
                itemText="Mojo pork, ham, pickles,
                salami, mustard sauce, and smoked Gruyere cheese"
                />
                <MenuItem itemHeader={`BRUDDAH RAY’S AHI TUNA STACK`}
                itemPrice="$11.95"
                itemText="Marinated ahi tuna stacked atop diced avocado, our house mango salsa,
                 and citrus slaw served with ponzu sauce and crispy wonton strips"
                />
                <MenuItem itemHeader="NACHOS"
                itemPrice="$10.95"
                itemText="House chips topped with our mojo pork, queso,
                 pico de gallo, pickled jalapeños, green onion,
                 Colby-Jack cheese, and drizzled with chipotle ranch"
                />
                <MenuItem itemHeader="TENDER BOLTS"
                itemPrice="$8.95"
                itemText="HanTOP SHELF WINGSd battered and golden fried chicken tenders served with choice of dipping sauce"
                />

         </div>

         <div className="starters-menu-right">
                <MenuItem itemHeader="THE HAT-TRICK"
                    itemPrice="$13.95"
                    itemText="Our house wings, Top Shelf chips and Ybor egg rolls"
                    />
                    <MenuItem itemHeader="TOP SHELF CHIPS"
                    itemPrice="$7.95"
                    itemText="Seasoned house chips topped with melted bleu cheese crumbles,
                     diced Roma tomatoes, green onions, and a balsamic drizzle"
                    />
                    <MenuItem itemHeader="BLACK BEAN HUMMUS"
                    itemPrice="$8.95"
                    itemText="Seasoned with roasted garlic, smoked jalapeños,
                     and spices served with crispy pita and plantain chips"
                    />

                    <MenuItem itemHeader="QUESADILLAS"
                    itemPrice="$9.95"
                    itemText="Pulled pork or chicken, Colby-Jack cheese,
                     drizzled with chipotle sour cream,
                     avocado lime sauce, and pico de gallo"
                    />
            
            </div>
     </div>
        <img className="starter-img" src={startersImg} alt="starters img"/>

            
  
{/* 2 menu */}
    <div className="starters-menu starters-menu-2">
            <div className="starters-menu-left top-shelf-wings">
            <h1 className="menu-heading">TOP SHELF WINGS</h1>
                <p className="item-text">
                Marinated in mojo, garlic,
                 and oregano overnight then grilled to perfection
                </p>
                <h3 className ="item-header">
                “SOON TO BE FAMOUS” HOUSE STYLE
                </h3>
                <h3 className='item-price h3-price'>
                8 | $10.95
                </h3>
                <h3 className='item-price h3-price'>
                16 | $19.95
                </h3>

                <p className="item-text">
                Finished with our house wing
                 sauce and topped with a zesty herb gremolata
                </p>
                <p className="item-text">
                <strong>ADDITIONAL FLAVORS AVAILABLE</strong>
                </p>
                <p className="item-text">
                Dry Rub, Buffalo, Habanero Guava BBQ, Garlic <br/> Parmesan
                </p>
            <img className="menu-wings-img" src={menuWings} alt="menu wings"/>
        </div> 

        <div className="starters-menu-right salads">
            <h1 className="menu-heading">SALADS</h1>
                <MenuItem2 color="black" itemHeader="Add Chicken" itemPrice="$3.95"/>
                <MenuItem2 color="black" itemHeader="Add Portabella" itemPrice="$3.95"/>
                <MenuItem2 color="black" itemHeader="Add Shrimp" itemPrice="$5.45"/>
                <MenuItem2 color="black" itemHeader="Add Ahi Tuna" itemPrice="$5.95"/>

                <MenuItem itemHeader="CAESAR SALAD"
                    itemPrice="$8.45"
                    itemText="Romaine lettuce topped with crispy croutons,
                     Caesar dressing,
                     and shaved parmesan cheese served with our house"
                    />
                 <MenuItem itemHeader="TROPICAL SALAD"
                    itemPrice="$9.95"
                    itemText="Spinach, topped with red onions, tomatoes,
                     cucumber, almonds,fresh strawberries and our mango salsa
                       served with our lemon honey vinaigrette and
                        a balsamic glaze "
                    />
                <MenuItem itemHeader="POWER PLAY"
                    itemPrice="$9.95"
                    itemText="Kale, cabbage, toasted almonds, sliced carrots,
                     tomato, red onion, avocado, cucumber, quinoa and feta 
                    cheese served with a lemon honey vinaigrette and a balsamic glaze "
                    />
                    <MenuItem itemHeader="WEDGE SALAD"
                    itemPrice="$8.45"
                    itemText="Iceberg lettuce, crispy bacon, boiled egg,
                     and Roma tomatoes topped with bleu cheese crumbles "
                    />
          </div> 
        
    </div>

{/* 3menu */}


        <div className="starters-menu starters-menu-3">
            <div className="starters-menu-left kids">
                 <h1 className="menu-heading">KIDS</h1>
                    <h3 className="subtitle">
                         For ages 12 and under
                    </h3>

                    <MenuItem2 color="blue" itemHeader="Chicken Tenders with Fries"
                     itemPrice="$7.95"/>
                    <MenuItem2 color="blue" itemHeader="Cheese Quesadilla"
                     itemPrice="$6.95"/>
                    <MenuItem2 color="blue" itemHeader="Kids Mac & Cheese" 
                    itemPrice="$6.95"/>
                    <MenuItem2 color="blue" itemHeader="Burger with Fries" 
                    itemPrice="$7.95"/>
            <img src={menuKids} className="menu-kids-img" alt="menu kids"/>
            </div>
            {/*end left menu */}
            <div className="starters-menu-right sandwiches">
                 <h1 className="menu-heading">SANDWICHES</h1>

                 <h3 className="subtitle">
                 Served with our seasoned house chips
                </h3>

                <MenuItem itemHeader="FARMHOUSE CLUB"
                    itemPrice="$12.95"
                    itemText="Fried chicken topped with ham, bacon,
                     avocado, lettuce, tomato, Gruyere cheese,
                      and house honey mustard sauce 
                    served on a toasted Coco bun (Buffalo-Style available as well) "
                    />
                    <MenuItem itemHeader="7TH AVE WRAP"
                    itemPrice="$10.95"
                    itemText="Sliced Gruyere cheese, ham, salami, olives, tomato,
                     onions and our house garlic vinaigrette in a spinach wrap"
                    />
                    <MenuItem itemHeader="CUBAN"
                    itemPrice="$9.95"
                    itemText="Our homemade mojo pork, sliced ham, 
                    and salami topped with melted Gruyere cheese, pickles,
                     and mustard sauce on pressed La Segunda Cuban bread"
                    />
                    <MenuItem itemHeader="BLACKENED SHRIMP LETTUCE WRAPS"
                    itemPrice="$13.95"
                    itemText="Three of our lettuce wraps filled with blackened shrimp,
                     green rice, corn, diced tomatoes, diced avocado,
                      crumbled spicy candied bacon,
                     and topped with creamy Italian dressing "
                    />
                    <MenuItem itemHeader="CITRUS CHICKEN WRAP"
                    itemPrice="$10.95"
                    itemText="Provolone cheese with grilled onions,
                     spinach, tomato, avocado, grilled red peppers,
                     and garlic aioli served in a spinach wrap"
                    />
                     <MenuItem itemHeader="DRUNKEN SLOPPY JOE"
                    itemPrice="$12.95"
                    itemText="Beer braised brisket, grilled jalapeño peppers,
                     Pepper Jack cheese sauce, 
                    crispy onion strings, and pickles on a roll"
                    />

            </div>
            {/*end right menu */}
        </div>
        {/* end menu  3 */}

         {/* menu 4 */}
        <div className="starters-menu starters-menu-4">
            <div className="starters-menu-left off-the-bench">
                    <h1 className="menu-heading">“OFF THE BENCH”</h1>
                    <h3 className="subtitle">
                    Potato Poutine Skillets with a Twist
                     </h3>

                     <MenuItem itemHeader="THE CANUCK"
                    itemPrice="$9.95"
                    itemText="Traditional Poutine with gravy
                     and white cheddar cheese curds "
                    />
                    <MenuItem itemHeader="HEAT SLASH"
                    itemPrice="$10.95"
                    itemText="Beer braised brisket, caramelized onion,
                     roasted corn, grilled jalapeños,
                     Pepper Jack cheese sauce, and an avocado lime cream "
                    />
                    <MenuItem itemHeader="KEELO CRAVE"
                    itemPrice="$10.95"
                    itemText="House chili, crispy bacon, cheese sauce, sour cream,
                     scallions, diced tomatoes and tortilla strips "
                    />
                    <img src={menuOffTheBench} className="off-the-bench-img" alt="off the bench"/>
             </div>
                 {/* end menu left */}

             <div className="starters-menu-right angus-burgers">
                    <h1 className="menu-heading">“1/2LB ANGUS BURGERS”</h1>
                    <h3 className="subtitle">
                         Served with our seasoned house chips
                     </h3>

                     <MenuItem itemHeader="CLASSIC BURGER"
                    itemPrice="$9.95"
                    itemText="Topped with lettuce, tomato, onion, and pickle
                    Add Cheese $0.50 or Bacon $1.00 "
                    />
                    <MenuItem itemHeader="PORTABELLA BURGER"
                    itemPrice="$10.95"
                    itemText="Topped with melted Gruyere cheese, red onions,
                     spinach, roasted red peppers and our chipotle mayo"
                    />
                    
                    <MenuItem itemHeader="LIGHTNING BLEU BURGER"
                    itemPrice="$12.95"
                    itemText="Topped with bleu cheese crumbles, spicy candied bacon,
                     crispy onion strings, lettuce, tomato, and chipotle mayo"
                    />
                    <MenuItem itemHeader="TURKEY BURGER"
                    itemPrice="$10.95"
                    itemText="Gruyere cheese, avocado, sliced red onion,
                     tomato, spinach and Dijon mustard"
                    />
            </div>
                 {/* end menu right */}

         </div>      
            {/* end menu 4 */}

      {/* menu 5 */}

            <div className="starters-menu starters-menu-5">
                    <div className="starters-menu-left bowls">
                             <h1 className="menu-heading">“BOWLS”</h1>
                            
                     <MenuItem itemHeader="HAVANA BOWL"
                    itemPrice="$10.95"
                    itemText="Our mojo roast pork, green rice, black beans,
                     caramelized onions, and drizzled with avocado
                     lime sauce and chipotle sauce served with plantain chips"
                    />
                     <MenuItem itemHeader="BUFFALO MAC N CHEESE"
                    itemPrice="$12.45"
                    itemText="A mix of Pepper Jack, Colby-Jack and parmesan cheese,
                     bacon bits, bleu cheese crumbles,
                     green onion, buffalo chicken tenders and garlic bread."
                    />
                     <MenuItem itemHeader="BRISKET BENDER"
                    itemPrice="$13.95"
                    itemText="Beer braised brisket atop roasted garlic parmesan
                     mashed potatoes,
                     fried onion strings, crispy kale chips, and garlic bread"
                    />
                     <MenuItem itemHeader="TUNA BOWL"
                    itemPrice="$16.95"
                    itemText="Blackened ahi tuna served on green rice with scallions and lime, Asian slaw, edamame, matchstick carrots, diced red peppers
                     and topped with honey soy ginger glaze and crispy wonton strips"
                    />
                     <MenuItem itemHeader="THUNDER CHOP CHOP"
                    itemPrice="$13.95"
                    itemText="Served with green rice, sautéed corn, onions, peppers, pico,
                     black beans, avocado lime sauce,
                      and Colby-Jack cheese topped with mixed greens, 
                      tortilla strips, and our house dressing.
                     Option of grilled chicken $12.45, or grilled shrimp $13.95"
                    />

                 </div>
                             {/* end menu left */}
                     <div className="starters-menu-right sides">
                         <h1 className="menu-heading">“SIDES”</h1>
                         <MenuItem2 color="blue" itemHeader="Seasoned Fries"
                            itemPrice="$3.45"/>
                            <MenuItem2 color="blue" itemHeader="Homemade Slaw"
                            itemPrice="$3.95"/>
                            <MenuItem2 color="blue" itemHeader="Seasoned House Chips"
                            itemPrice="$3.45"/>
                            <MenuItem2 color="blue" itemHeader="Side Salad"
                            itemPrice="$3.95"/>
                            <MenuItem2 color="blue" itemHeader="Rice & Beans"
                            itemPrice="$3.45"/>
                             <MenuItem2 color="blue" itemHeader="Seasonal Grilled Veggies"
                            itemPrice="$3.95"/>
                        <img src ={menuSides} className="menu-sides-img" alt="menu sides image"/>    
                     </div>
                     {/* end menu right */}
                </div>
             {/* end menu 5 */}
</div> 


</section>
 </div>

    );

};
export default Menu;