import React from 'react';
import HeaderParalax from '../reusable/HeaderParalax';
import MenuItem from '../reusable/MenuItem';
import MenuItem2 from '../reusable/MenuItem2';

const DrinksMenu =()=>{
    return(
        <div class='drinks-menu'>
            <HeaderParalax nameClass="drinks-menu"
            headerName="DRINKS MENU"
            headerText="Our bartenders have put together a special drink 
            menu to accompany the great food we serve each day.
            Along with our specialty drinks,
            Top Shelf Sports Lounge is passionate about craft beer.
            We pride ourselves on serving a wide variety of local 
            and national beers on draft, with 11 of our 20 beers
            on tap from local craft breweries.
            We offer a wide range of craft beers for any beer
            lover seeking new tastes or just looking for a classic pint."
            
            button={true}
            buttonName="download menu"
            buttonColor="blue"
            />

                <div className="drinks-menu-container margin-top">
                    <div className="drinks-menu-left">
                         <h1 className="menu-heading drinks-menu-heading">LIGHT SIDE</h1>
                         <MenuItem2 color="blue" itemHeader="81Bay Lightning Lager" itemPrice="$4.75"/>
                         <MenuItem2 color="blue" itemHeader="Coors Light" itemPrice="$4.75"/>
                         <MenuItem2 color="blue" itemHeader="Yuengling Lager" itemPrice="$4.75"/>
                         <MenuItem2 color="blue" itemHeader="Labatt Blue" itemPrice="$4.75"/>
                         <MenuItem2 color="blue" itemHeader="Bud Light" itemPrice="$4.75"/>
                         <MenuItem2 color="blue" itemHeader="81Bay Ft. Brooke Blonde" itemPrice="$4.75"/>
                        

                    </div>
                    {/* end drinks menu left */}

                    <div className="drinks-menu-right">
                         <h1 className="menu-heading drinks-menu-heading">HOPPPY SIDE </h1>

                         <MenuItem2 color="blue" itemHeader="81Bay Sun Viking" itemPrice="$6"/>
                         <MenuItem2 color="blue" itemHeader="Cigar City Guayabera" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="Coppertail Free Dive IPA" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="TBBC Reef Donkey" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="Terrapin Hopsecutioner" itemPrice="$6.50"/>
                        
                       
                    </div>
                    {/* end drinks menu right*/}
                
                </div>
            {/* end drinks menu container */}

        {/* drinks menu container 2 - same thing, but easier to manage blocks */}


        <div className="drinks-menu-container">
                    <div className="drinks-menu-left">
                         <h1 className="menu-heading drinks-menu-heading">DARK SIDE</h1>
                         <MenuItem2 color="blue" itemHeader="81Bay Coffee Porter" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="Escape Brown Chicken Brown Cow" itemPrice="$6.50"/>
                         
                        

                    </div>
                    {/* end drinks menu left */}

                    <div className="drinks-menu-right">
                         <h1 className="menu-heading drinks-menu-heading">SWEET SIDE</h1>

                         <MenuItem2 color="blue" itemHeader="81Bay Top Shelf Orange Wheat" itemPrice="$6"/>
                         <MenuItem2 color="blue" itemHeader="Brew Bus You’re My Boy Blueberry" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="Stella Artois Cider" itemPrice="$6"/>
                         
                        
                       
                    </div>
                    {/* end drinks menu right*/}
                
                </div>
            {/* end drinks menu container 2*/}


         {/* drinks menu container 3 - same thing, but easier to manage blocks */}

         <h1 className="menu-heading drinks-menu-heading one-row">CANS & BOTTLES</h1>
                <div className="drinks-menu-container one-row">
            
                    <div className="drinks-menu-left">
                         
                         <MenuItem2 color="blue" itemHeader="Miller Lite (16oz)" itemPrice="$4.75"/>
                         <MenuItem2 color="blue" itemHeader="Cigar City Florida Cracker (16oz)"
                          itemPrice="$6"/>
                         <MenuItem2 color="blue" itemHeader="Michelob Ultra (16oz)"
                          itemPrice="$5"/>
                         <MenuItem2 color="blue" itemHeader="Budweiser (16oz)" 
                         itemPrice="$4.75"/>
                         <MenuItem2 color="blue" itemHeader="Corona Light (16oz)" 
                         itemPrice="$5"/>
                         <MenuItem2 color="blue" itemHeader="Guinness (14.9oz)" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="81Ray Reel Slo Irish Red (12oz)"
                          itemPrice="$5"/>
                         <MenuItem2 color="blue" itemHeader="Labatt Blue (12oz)" itemPrice="$4"/>

                    </div>
                    {/* end drinks menu left */}

                    <div className="drinks-menu-right">
                        <MenuItem2 color="blue" itemHeader="81Bay Coffee Porter" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="Escape Brown Chicken Brown Cow" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="81Bay Coffee Porter" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="Escape Brown Chicken Brown Cow" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="81Bay Coffee Porter" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="Escape Brown Chicken Brown Cow" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="81Bay Coffee Porter" itemPrice="$6.50"/>
                         <MenuItem2 color="blue" itemHeader="Escape Brown Chicken Brown Cow" itemPrice="$6.50"/>
                       
                    </div>
                    {/* end drinks menu right*/}
                
                </div>
            {/* end drinks menu container 3*/}


            {/* drinks menu container 4 - same thing, but easier to manage blocks */}

         <h1 className="menu-heading drinks-menu-heading one-row">COCKTAILS</h1>
                <div className="drinks-menu-container one-row">
            
                    <div className="drinks-menu-left">
                    <MenuItem itemHeader="Major Penalty"
                    itemPrice="$9"
                    itemText="Bacardi® Superior Rum, Absolut® Vodka,
                     Herradura Silver Tequila, Tanqueray Gin, triple sec, sour mix, lemon"
                    />

                    <MenuItem itemHeader="Bloody Caesar"
                    itemPrice="$9"
                    itemText="Absolut® Vodka, Zing Zang Bloody Mary Mix,
                     lime, Bleu cheese olive, bacon, pickle, celery"
                    />
                    <MenuItem itemHeader="Cosmo"
                    itemPrice="$9"
                    itemText="Absolut® Mandarin®, triple sec, lime juice,
                     cranberry, garnished with orange slice"
                    />

                    <MenuItem itemHeader="The Stammer"
                    itemPrice="$9"
                    itemText="Herradura Silver, triple sec, lime juice, orange juice,
                     Grand Marnier® float,
                     garnished with salt or sugar rim, a lime, and an orange slice"
                    />

                    <MenuItem itemHeader="Delayed Penalty"
                    itemPrice="$9"
                    itemText="Stoli Vanil Vodka, Frangelico® Hazelnut Liqueur,
                     Baileys Original Irish Cream Liqueur,
                     topped with whipped cream & caramel drizzle"
                    />
                         

                    </div>
                    {/* end drinks menu left */}

                    <div className="drinks-menu-right">
                    <MenuItem itemHeader="Sangria"
                    itemPrice="$9"
                    itemText="SeaGlass Pinot Noir, peach schnapps,
                     blackberry brandy, simple syrup, orange juice,
                     lemon-lime soda, garnished with orange, lemon, lime, cherry"
                    />

                    <MenuItem itemHeader="Absolute® Mule"
                    itemPrice="$9"
                    itemText="Absolut® Lime Vodka, ginger beer,
                     simple syrup, fresh squeezed limes"
                    />

                    <MenuItem itemHeader="Irish Coffee"
                    itemPrice="$9"
                    itemText="Jameson® Irish Whiskey, topped with whipped cream,
                     dark creme de menth drizzle.
                     $2 upcharge for a shot of Baileys Original Irish Cream Liqueur"
                    />

                    <MenuItem itemHeader="Goal Tender"
                    itemPrice="$9"
                    itemText="Woodford Reserve, bitters, simple syrup, orange slice & cherry"
                    />
                    <MenuItem itemHeader="Penalty Box"
                    itemPrice="$9"
                    itemText="Jack Daniel’s Tennessee Fire, Stella Artois Cidre"
                    />
                       
                    </div>
                    {/* end drinks menu right*/}
                
                </div>
            {/* end drinks menu container 4*/}


             {/* drinks menu container 5 - same thing, but easier to manage blocks */}

         
                <div className="drinks-menu-container ">
            
                    <div className="drinks-menu-left">
                    <h1 className="menu-heading drinks-menu-heading ">MARTINIS</h1>
                    <MenuItem itemHeader="Major Penalty"
                    itemPrice="$9"
                    itemText="Bacardi® Superior Rum, Absolut® Vodka,
                     Herradura Silver Tequila, Tanqueray Gin, triple sec, sour mix, lemon"
                    />

                    <MenuItem itemHeader="Bloody Caesar"
                    itemPrice="$9"
                    itemText="Absolut® Vodka, Zing Zang Bloody Mary Mix,
                     lime, Bleu cheese olive, bacon, pickle, celery"
                    />
                    <MenuItem itemHeader="Cosmo"
                    itemPrice="$9"
                    itemText="Absolut® Mandarin®, triple sec, lime juice,
                     cranberry, garnished with orange slice"
                    />

                    <MenuItem itemHeader="The Stammer"
                    itemPrice="$9"
                    itemText="Herradura Silver, triple sec, lime juice, orange juice,
                     Grand Marnier® float,
                     garnished with salt or sugar rim, a lime, and an orange slice"
                    />

                    <MenuItem itemHeader="Delayed Penalty"
                    itemPrice="$9"
                    itemText="Stoli Vanil Vodka, Frangelico® Hazelnut Liqueur,
                     Baileys Original Irish Cream Liqueur,
                     topped with whipped cream & caramel drizzle"
                    />
                         

                    </div>
                    {/* end drinks menu left */}

                    <div className="drinks-menu-right">
                    <h1 className="menu-heading drinks-menu-heading ">SHOTS</h1>
                            <MenuItem itemHeader="Sangria"
                            itemPrice="$9"
                            itemText="SeaGlass Pinot Noir, peach schnapps,
                            blackberry brandy, simple syrup, orange juice,
                            lemon-lime soda, garnished with orange, lemon, lime, cherry"
                            />

                            <MenuItem itemHeader="Absolute® Mule"
                            itemPrice="$9"
                            itemText="Absolut® Lime Vodka, ginger beer,
                            simple syrup, fresh squeezed limes"
                            />

                            <MenuItem itemHeader="Irish Coffee"
                            itemPrice="$9"
                            itemText="Jameson® Irish Whiskey, topped with whipped cream,
                            dark creme de menth drizzle.
                            $2 upcharge for a shot of Baileys Original Irish Cream Liqueur"
                            />

                            <MenuItem itemHeader="Goal Tender"
                            itemPrice="$9"
                            itemText="Woodford Reserve, bitters, simple syrup, orange slice & cherry"
                            />
                            <MenuItem itemHeader="Penalty Box"
                            itemPrice="$9"
                            itemText="Jack Daniel’s Tennessee Fire, Stella Artois Cidre"
                            />
                       
                    </div>
                    {/* end drinks menu right*/}
                
                </div>
            {/* end drinks menu container 5*/}

            {/* drinks menu container 3 - same thing, but easier to manage blocks */}

        
                <div className="drinks-menu-container margin-bottom">
            
                    <div className="drinks-menu-left">
                    <h1 className="menu-heading drinks-menu-heading ">RED WINE</h1>
                         <MenuItem2 color="blue" itemHeader="Seaglass Pinot Noir" itemPrice="$8"/>
                         <MenuItem2 color="blue" itemHeader="La Crema Pinot Noir"
                          itemPrice="$11"/>
                         <MenuItem2 color="blue" itemHeader="Chateau St. Jean Merlot"
                          itemPrice="$8"/>

                         <MenuItem2 color="blue" itemHeader="Freakshow Cabernet Sauvignon" 
                         itemPrice="$9"/>
                         <MenuItem2 color="blue" itemHeader="Hess Select Cabernet Sauvignon" 
                         itemPrice="$11"/>
                         <MenuItem2 color="blue" itemHeader="Juggernaut Cabernet Sauvignon" itemPrice="$13"/>
                         
                    </div>
                    {/* end drinks menu left */}

                    <div className="drinks-menu-right">
                    <h1 className="menu-heading drinks-menu-heading ">WHITE WINE</h1>
                        <MenuItem2 color="blue" itemHeader="Grandial Sparkling Wine" itemPrice="$7"/>
                         <MenuItem2 color="blue" itemHeader="Three Pears Pinot Grigio" itemPrice="$8"/>
                         <MenuItem2 color="blue" itemHeader="Charles Smith Kung Fu Girl Riesling" itemPrice="$7"/>
                         <MenuItem2 color="blue" itemHeader="Kono Sauvignon Blanc" itemPrice="$8"/>
                         <MenuItem2 color="blue" itemHeader="Hess Shirtail Ranches Chardonnay" itemPrice="$8"/>
                         <MenuItem2 color="blue" itemHeader="Sonoma Cutrer Chardonnay" itemPrice="$11"/>
                        
                       
                    </div>
                    {/* end drinks menu right*/}
                
                </div>
            {/* end drinks menu container 6*/}

        </div>
// end drinks menu
    );

};
export default DrinksMenu;