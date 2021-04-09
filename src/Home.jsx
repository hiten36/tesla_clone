import React from 'react';
import Basic from './Basic';
import Use_script from './Use_script';

function Home()
{
    Use_script('script/home.js');
    return(
        <>
            <Basic cn='centerbg' flag='true' ids="tc1" model='Model S' message2='CUSTOM ORDER' message3="EXISTING INVENTORY"/>
            <Basic cn='centerbg' flag='true' ids="tc2" model='Model Y' message2='CUSTOM ORDER' message3="EXISTING INVENTORY"/>
            <Basic cn='centerbg' flag='true' ids="tc3" model='Model 3' message2='CUSTOM ORDER' message3="EXISTING INVENTORY"/>
            <Basic cn='centerbg' flag='true' ids="tc4" model='Model X' message2='CUSTOM ORDER' message3="EXISTING INVENTORY"/>
            <Basic cn='centerbg' ids="tc5" model='Lowest Cost Solar Panels in America' message1="Money-back guarantee" message2='ORDER NOW' message3="LEARN MORE"/>
            <Basic cn='centerbg' ids="tc6" model='Solar for New Roofs' message1="Solar Roof Costs Less Than a New Roof Plus Solar Panels" message2='ORDER NOW' message3="LEARN MORE"/>
            <Basic cn='centerbg1' flag1='true' ids="tc7" model='Accessories' message2="SHOP NOW"/>
        </>
    )
}
export default Home;