import { useState } from "react"
import AdditionalTab from "./AllTabs/AdditionalTab";
import DescriptionTab from "./AllTabs/DescriptionTab";

const TabsMenu = () => {
    //states to toggle which tab is active
    const [activeTab, setActiveTab] = useState('tab1');


    const handleToggle = (e) => {
        let toggler = e.target.id

        setActiveTab(toggler)
    }

  return (
    <div className="container">
        <div className="tabs">

            <ul className="navigation">
                <li id="tab1" onClick={handleToggle} className={activeTab === 'tab1' ? 'active' : ''}>Description</li>
                <li id="tab2" onClick={handleToggle} className={activeTab === 'tab2' ? 'active' : ''}>Additional</li>
            </ul>

            <div className="outlet">
            {
                activeTab === 'tab1' ? <DescriptionTab/> : <AdditionalTab/>
            }
            </div>

        </div>
    </div>

  )
}
export default TabsMenu